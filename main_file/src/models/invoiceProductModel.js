const mongoose = require("mongoose");
const DataSchema = mongoose.Schema(
  {
    user_id: { type: mongoose.Schema.Types.ObjectId, required: true },
    product_id: { type: mongoose.Schema.Types.ObjectId, required: true },
    invoice_id: { type: mongoose.Schema.Types.ObjectId, required: true },
    qty: { type: Number, required: true },
    price: { type: Number, required: true },
    color: { type: String, required: true },
    size: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const InvoiceProductModel = mongoose.model("invoicesproducts", DataSchema);

module.exports = InvoiceProductModel;
