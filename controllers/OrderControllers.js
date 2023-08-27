const OrderDetails = require("../models/OrderDetails");

const buyProduct = async (req, res) => {
  try {
    const { custContact, custEmail, custAddress, orderPrice, tax } = req.body;
    let orderName = Math.floor(1000 + Math.random() * 9000);
    const newOrder = new OrderDetails({
      orderName,
      custContact,
      custEmail,
      custAddress,
      orderPrice,
      tax: 0,
      isFullfilled: false,
    });
    const order = await newOrder.save();
    if (order) {
      res.json({
        success: true,
        data: order,
        msg: `Order Placed, order id: ${orderName}`,
      });
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
      ((order.custContact === null && order.custEmail === req.body.custEmail) ||
        (order.custEmail === null &&
          order.custContact === req.body.custContact))
    ) {
      if (order.isFullfilled) {
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
