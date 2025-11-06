const mongoose = require("mongoose");
const cartModel = require("../models/cartModel");
const productModel = require("../models/productModel");
const ObjectId = mongoose.Types.ObjectId;

//! cart create
exports.createCart = async (req, res) => {
  try {
    const { product_id, product_name, color, qty, size } = req.body;

    let user_id = req.headers._id;

    // find the stock products
    let product = await productModel.findById(product_id);

    // Find existing cart
    let existingCart = await cartModel.findOne({
      user_id,
      product_id,
      product_name,
      color,
      size,
    });

    if (!!existingCart === true) {
      let newReqBody = {
        user_id,
        product_id,
        product_name,
        color,
        size,
        qty: parseInt(existingCart.qty) + parseInt(qty),
      };
      console.log(product?.stock, newReqBody.qty);

      if (product?.stock < qty) {
        return res.status(200).json({
          success: false,
          message: "Product out of stock.",
        });
      }

      const updateData = await cartModel.updateOne(
        { _id: existingCart._id, user_id: existingCart.user_id },
        { $set: newReqBody }
      );
      // decrease stock
      await mongoose.model("products").updateOne(
        { _id: product_id },
        { $inc: { stock: -qty } }
      );

      res.status(200).json({
        success: true,
        message: "Cart update.",
        updateData,
      });
    } else {
      // For new products
      if (product?.stock < qty) {
        return res.status(200).json({
          success: false,
          message: "Product out of stock.",
        });
      }

      const data = await cartModel.create({
        user_id,
        product_id,
        product_name,
        color,
        qty,
        size,
      });

      // decrease stock
      await mongoose.model("products").updateOne(
        { _id: product_id },
        { $inc: { stock: -qty } }
      );
      res.status(200).json({
        success: true,
        message: "Product add to cart successfully",
        data,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.toString(),
      message: "Something went wrong.",
    });
  }
};

//! cart read
exports.readCart = async (req, res) => {
  try {
    let user_id = new ObjectId(req.headers._id);
    let matchStage = { $match: { user_id } };
    let joinWithProduct = {
      $lookup: {
        from: "products",
        localField: "product_id",
        foreignField: "_id",
        as: "product",
      },
    };
    let unwindProductStage = { $unwind: "$product" };
    let joinWithBrand = {
      $lookup: {
        from: "brands",
        localField: "product.brand_id",
        foreignField: "_id",
        as: "brand",
      },
    };
    let joinWithCategory = {
      $lookup: {
        from: "categories",
        localField: "product.category_id",
        foreignField: "_id",
        as: "category",
      },
    };
    let unwindBrandStage = { $unwind: "$brand" };
    let unwindCategoryStage = { $unwind: "$category" };
    let projectionStage = {
      $project: {
        _id: 1,
        user_id: 0,
        "product._id": 0,
        "product.category_id": 0,
        "product.brand_id": 0,
        "product.createdAt": 0,
        "product.updatedAt": 0,
        "product.description": 0,
        "brand._id": 0,
        "brand.createdAt": 0,
        "brand.updatedAt": 0,
        "category._id": 0,
        "category.createdAt": 0,
        "category.updatedAt": 0,

        category_id: 0,
        brand_id: 0,
        createdAt: 0,
        updatedAt: 0,
      },
    };
    const data = await cartModel.aggregate([
      matchStage,
      joinWithProduct,
      unwindProductStage,
      joinWithBrand,
      unwindBrandStage,
      joinWithCategory,
      unwindCategoryStage,
      projectionStage,
    ]);

    res.status(200).json({
      success: true,
      message: "Cart fetched successfully",
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.toString(),
      message: "Something went wrong.",
    });
  }
};

//! cart update
exports.updateCart = async (req, res) => {
  try {
    const { product_id, qty, inc } = req.body;

    let user_id = req.headers._id;
    let cart_id = new ObjectId(req.params.cart_id);

    let initQTY = 1
    if (inc) {
      // find the stock products
      let product = await productModel.findById(product_id);
      if (product?.stock >= initQTY) {
        await productModel.updateOne(
          { _id: product_id },
          { $inc: { stock: -initQTY } } // decrease stock
        );
        const data = await cartModel.updateOne(
          { _id: cart_id, user_id: user_id },
          { $set: { user_id, product_id, qty } }
        );
        return res.status(200).json({
          success: true,
          message: "Cart update successfully.",
          data,
        });
      } else {
        return res.status(200).json({
          success: false,
          message: "Product out of stock!",

        });
      }
    } else {
      await productModel.updateOne(
        { _id: product_id },
        { $inc: { stock: initQTY } } // increase stock
      );
      const data = await cartModel.updateOne(
        { _id: cart_id, user_id: user_id },
        { $set: { user_id, product_id, qty } }
      );
      return res.status(200).json({
        success: true,
        message: "Cart update successfully.",
        data,
      });
    }

  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.toString(),
      message: "Something went wrong.",
    });
  }
};

//! cart delete
exports.deleteCart = async (req, res) => {
  try {
    let cart_id = new ObjectId(req.params.cart_id);
    const data = await cartModel.deleteOne({ _id: cart_id });
    res.status(200).json({
      success: true,
      message: "Cart deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.toString(),
      message: "Something went wrong.",
    });
  }
};
