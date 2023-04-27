const express = require('express');
const {getAllProducts, getProductById} = require("../../controllers/products/index");
const isValidId = require("../../middlewares");
const router = express.Router();

router.get('/', getAllProducts);
router.get('/:productId', getProductById);

module.exports = router;