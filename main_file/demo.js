const mongoose = require("mongoose");

const DataSchema = new mongoose.Schema(
  {
   
  
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const productModel = mongoose.model("products", DataSchema);

module.exports = productModel;
