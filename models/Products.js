const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    productName: { type: String, required: true },
    productPrice: { type: Number },
    productDescription: { type: String },
    productImage: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Products", productSchema);
