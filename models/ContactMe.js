const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String
});

// first arg in collection name
module.exports = mongoose.model("Contact-Me", contactSchema);

console.log("collection connected");