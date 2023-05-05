const { Category } = require("../../models/category");
const {ControllerWrapper} = require("../../utils/index.js");

const getAllCategories = async (req, res) => {
    const result = await Category.find();
    res.json(result); 
       
  };

module.exports = ControllerWrapper(getAllCategories);