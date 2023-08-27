const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  name: String,
  message: String,
});

module.exports = mongoose.model("Contact-Me-Shopify", contactSchema);

console.log("collection connected");
