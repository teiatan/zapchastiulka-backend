const {isValidObjectId} = require("mongoose");
const {HttpError} = require("../utils");

const isValidId = (req, res, next) => {
    const {productId} = req.params;
    if(!isValidObjectId(productId)) {
        next(HttpError(400, `${productId} is not valid id`));
    };
    next();
};

module.exports = isValidId;