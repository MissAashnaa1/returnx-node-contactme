const mongoose = require("mongoose");

const orderDetailsSchema = new mongoose.Schema(
  {
    orderName: { type: String, required: true },
    custContact: { type: String },
    custEmail: { type: String },
    custAddress: { type: String },
    orderPrice: { type: Number },
    tax: { type: Number },
    isFullfilled: { type: Boolean },
  },
  { timestamps: true }
);

module.exports = mongoose.model("OrderDetails", orderDetailsSchema);
