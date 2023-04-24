const {Product} = require("../../models/product")
const {HttpError, ControllerWrapper} = require("../../utils/index.js");

const getAllProducts = async (req, res) => {
    const result = await Product.find();
    res.json(result);    
  };

module.exports = ControllerWrapper(getAllProducts);