const express = require("express");
const { addProduct } = require("../controllers/ProductControllers");
const router = express.Router();

router.route("/").post(addProduct);

module.exports = router;
