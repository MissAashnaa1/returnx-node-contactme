const Products = require("../models/Products");

const getProducts = async (req, res) => {
  try {
    let products = await Products.find();
    if (products) {
      res.json({ products });
    } else {
      res.json({ products: null });
    }
  } catch (error) {
    res.status(400).json({ success: false, data: null });
  }
};

const addProduct = async (req, res) => {
  try {
    const { name, price, description, image } = req.body;
    const newProduct = new Products({
      productName: name,
      productPrice: price,
      productDescription: description,
      productImage: image,
    });
    const product = await newProduct.save();
    if (product) {
      res.json({ success: true, data: product });
    } else {
      res.json({ success: false, data: null });
    }
  } catch (error) {
    res.status(400).json({ success: false, data: null });
  }
};

module.exports = { getProducts, addProduct };
