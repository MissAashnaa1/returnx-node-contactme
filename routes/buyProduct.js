const express = require("express");
const { buyProduct } = require("../controllers/OrderControllers");

const router = express.Router();

router.route("/").post(buyProduct);

module.exports = router;
