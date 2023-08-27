const express = require("express");
const { getProducts } = require("../controllers/ProductControllers");
const router = express.Router();

router.route("/").get(getProducts);

module.exports = router;
