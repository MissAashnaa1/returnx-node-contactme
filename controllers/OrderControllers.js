const OrderDetails = require("../models/OrderDetails");

const buyProduct = async (req, res) => {
  try {
    const { orderName, custContact, custEmail, custAddress, orderPrice, tax } =
      req.body;
    const newOrder = new OrderDetails({
      orderName,
      custContact,
      custEmail,
      custAddress,
      orderPrice,
      tax,
      fullfilled: false,
    });
    const order = await newOrder.save();
    if (order) {
      res.json({ success: true, data: order });
    } else {
      res.json({ success: false, data: null });
    }
  } catch (error) {
    res.status(400).json({ success: false, data: null });
  }
};

const verifyOrder = async (req, res) => {
  try {
    let order = await OrderDetails.findOne({ orderName: req.body.orderName });

    if (
      order &&
      (order.orderName === req.body.orderName ||
        order.custContact === req.body.custContact)
    ) {
      if (order.fullfilled) {
        res.json({ success: true, msg: "Order already fullfilled" });
      } else {
        res.json({ success: false, msg: "Order not fullfilled" });
      }
    } else {
      res.json({ success: false, msg: "Order does not exits!" });
    }
  } catch (error) {
    res.status(400).json({ success: false, data: null });
  }
};

module.exports = { verifyOrder, buyProduct };
