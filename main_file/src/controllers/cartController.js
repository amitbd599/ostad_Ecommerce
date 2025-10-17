const cartModel = require("../models/cartModel");

//! cart create
exports.createCart = async (req, res) => {
  try {
    const { product_id, color, qty, size } = req.body;

    let user_id = req.headers._id;

    // Find existing cart
    let existingCart = await cartModel.findOne({
      user_id: user_id,
      product_id: product_id,
      color: color,
      size: size,
    });

    if (!!existingCart) {
      let newReqBody = {
        user_id: user_id,
        product_id: product_id,
        color: color,
        size: size,
        qty: parseInt(existingCart.qty) + parseInt(qty),
      };
      const updateData = await cartModel.updateOne(
        { _id: existingCart._id, user_id: existingCart.user_id },
        { $set: newReqBody }
      );
      res.status(200).json({
        success: true,
        message: "Cart update.",
        updateData,
      });
    } else {
      const data = await cartModel.create({
        user_id,
        product_id,
        color,
        qty,
        size,
      });
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
