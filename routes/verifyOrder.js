const express = require("express");
const { verifyOrder } = require("../controllers/OrderControllers");
const router = express.Router();

router.route("/").post(verifyOrder);

module.exports = router;
