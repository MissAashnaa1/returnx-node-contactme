const express = require("express");
const router = express.Router();
const ContactMe = require("../models/ContactMe");

router.post("/", async (req, res) => {
  let obj = req.body;

  if (obj.name == "" || obj.message == "") {
    res.json({ success: false, msg: "All field required!" });
    return;
  }

  obj = new ContactMe(obj);
  obj.save();

  res.json({ msg: "Message saved succesfully.", success: true });
});

module.exports = router;
