const mongoose = require("mongoose");
const cartModel = require("../models/cartModel");
const ObjectId = mongoose.Types.ObjectId;

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

//! cart update
exports.updateCart = async (req, res) => {
  try {
    const { product_id, color, qty, size } = req.body;

    let user_id = req.headers._id;
    let cart_id = new ObjectId(req.params.cart_id);

    const data = await cartModel.updateOne(
      { _id: cart_id, user_id: user_id },
      { $set: { user_id, product_id, color, qty, size } }
    );
    res.status(200).json({
      success: true,
      message: "Product add to cart successfully",
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
