const express = require("express");
const ContactMe = require("../models/ContactMe");

const router = express.Router();

router.route("/").get(async (req, res) => {
  const data = await ContactMe.find();
  if (data) {
    res.json({ success: true, data: data });
  } else {
    res.json({ success: false, data: null });
  }
});

module.exports = router;
