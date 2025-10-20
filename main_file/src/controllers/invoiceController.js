const cartModel = require("../models/cartModel");
const invoiceModel = require("../models/invoiceModel");

//! invoice create
exports.createInvoice = async (req, res) => {
  try {
    let user_id = new ObjectId(req.headers.user_id);
    let cus_email = req.headers.email;

    // =========== Step-1: Calculate total payable & vat =============

    let matchStage = { $match: { user_id } };

    let joinStageWithProduct = {
      $lookup: {
        from: "products",
        localField: "product_id",
        foreignField: "_id",
        as: "product",
      },
    };

    let unwindStage = { $unwind: "$product" };

    let cartProducts = await cartModel.aggregate([
      matchStage,
      joinStageWithProduct,
      unwindStage,
    ]);

    if (cartProducts.length > 0) {
      let totalAmount = 0;

      cartProducts.forEach((item) => {
        let price;

        if (item?.product?.discount === true) {
          price = parseFloat(item.product.discountPrice); //20
        } else {
          price = parseFloat(item.product.price); //200
        }
        totalAmount = totalAmount + parseFloat(item?.qty) * price;
      });

      let vat = totalAmount * 0.05; // 5% vat
      let shipping = 75;

      console.log(totalAmount, vat, shipping);

      let totalPayable = totalAmount + vat + shipping;

      console.log(parseFloat(totalPayable).toFixed(2));

      // =========== Step-2: Prepare customer details & shipping details =============

      let profile = await ProfileModel.aggregate([matchStage]);
      let cus_details = {
        Name: profile[0]?.cus_name,
        Email: cus_email,
        Address: profile[0]?.cus_add,
        Phone: profile[0]?.cus_phone,
      };
      let ship_details = {
        Name: profile[0]?.ship_name,
        City: profile[0]?.ship_city,
        Address: profile[0]?.ship_add,
        Phone: profile[0]?.ship_phone,
      };

      // =========== Step-3: Transaction & other's ID =============

      let tran_id = Math.floor(10000000000 + Math.random() * 900000000);
      let val_id = 0;
      let deliver_status = "pending";
      let payment_status = "pending";

      // =========== Step-4: Create invoice =============

      let createInvoice = await invoiceModel.create({
        user_id: user_id,
        payable: parseFloat(totalPayable).toFixed(2),
        cus_details: cus_details,
        ship_details: ship_details,
        tran_id: tran_id,
        val_id: val_id,
        deliver_status: deliver_status,
        payment_status: payment_status,
        vat: vat,
        total: totalAmount,
      });

      // =========== Step-5: Create invoice product =============
      let invoice_id = createInvoice._id;

      cartProducts.forEach(async (item) => {
        await InvoiceProductModel.create({
          user_id: user_id,
          product_id: item?.product_id,
          invoice_id: invoice_id,
          qty: item?.qty,
          price:
            item.product.discount === true
              ? item.product.discountPrice
              : item.product.price,
          color: item?.color,
          size: item?.size,
        });
      });

      // =========== Step-6: Remove carts =============

      await cartModel.deleteMany({ user_id: user_id });

      // =========== Step-7: Prepare SSL Payment =============

      let PaymentSetting = {
        store_id: "theme664dfb04bfaf4",
        store_passwd: "theme664dfb04bfaf4@ssl",
        currency: "BDT",
        success_url: "/api/v1/payment-success",
        fail_url: "/api/v1/payment-fail",
        cancel_url: "/api/v1/payment-cancel",
        ipn_url: "/api/v1",
        init_url: "https://sandbox.sslcommerz.com/gwprocess/v3/api.php",
      };

      let form = new FormData();
      // Request Parameters
      form.append("store_id", PaymentSetting.store_id);
      form.append("store_passwd", PaymentSetting.store_passwd);
      form.append("total_amount", totalPayable.toString());
      form.append("currency", PaymentSetting.currency);
      form.append("tran_id", tran_id);
      form.append("success_url", `${PaymentSetting.success_url}/${tran_id}`);
      form.append("fail_url", `${PaymentSetting.fail_url}/${tran_id}`);
      form.append("cancel_url", `${PaymentSetting.cancel_url}/${tran_id}`);
      form.append("ipn_url", `${PaymentSetting.ipn_url}/${tran_id}`);

      // Customer Information
      form.append("cus_name", profile[0]?.cus_name);
      form.append("cus_email", cus_email);
      form.append("cus_add1", profile[0]?.cus_add);
      form.append("cus_add2", profile[0]?.cus_add);
      form.append("cus_city", profile[0]?.cus_city);
      form.append("cus_state", profile[0]?.cus_state);
      form.append("cus_postcode", profile[0]?.cus_postcode);
      form.append("cus_country", profile[0]?.cus_country);
      form.append("cus_phone", profile[0]?.cus_phone);

      // Shipment Information
      form.append("shipping_method", "YES");
      form.append("ship_name", profile[0]?.ship_name);
      form.append("ship_add1", profile[0]?.ship_add);
      form.append("ship_add2", profile[0]?.ship_add);
      form.append("ship_city", profile[0]?.ship_city);
      form.append("ship_state", profile[0]?.ship_state);
      form.append("ship_country", profile[0]?.ship_country);
      form.append("ship_postcode", profile[0]?.ship_postcode);
      form.append("ship_phone", profile[0]?.ship_phone);

      // Product Information
      form.append("product_name", "According Invoice");
      form.append("product_category", "According Invoice");
      form.append("product_profile", "According Invoice");
      form.append("product_amount", "According Invoice");

      let SSLRes = await axios.post(PaymentSetting.init_url, form);

      return { status: true, data: SSLRes.data };
    } else {
      return { status: false, error: "Cart is empty" };
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.toString(),
      message: "Something went wrong.",
    });
  }
};
