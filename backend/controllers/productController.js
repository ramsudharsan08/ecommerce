const productModel = require("../models/productModel");

// Get all products Api
exports.getProducts = async (req, res, next) => {
  let query = req.query.keyword?{
     name : {
      $regex: req.query.keyword,
      $options: 'i'
     }
  }:{}
  const products = await productModel.find(query);

  res.json({
    status: "success",
    products
  });
};

// Get Single product Api
exports.getSingleProduct = async (req, res, next) => {
  try {
    const productId = req.params.id;
    const product = await productModel.findById(productId);
    res.json({
      status: "success",
      product
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: error.message
    });
  }
};