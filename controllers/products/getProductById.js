const {Product} = require("../../models/product")
const {HttpError, ControllerWrapper} = require("../../utils/index.js");

const getProductById = async (req, res) => {
    const {productId} = req.params;
    const result = await Product.findById(productId, "-createdAt -updatedAt");
    if(!result) {
      throw HttpError(404, "Not found. Contact with such id doesn't exist");
    };
    res.json(result);
  };

module.exports = ControllerWrapper(getProductById);