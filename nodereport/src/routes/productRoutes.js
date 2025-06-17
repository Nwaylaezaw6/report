const express = require('express');
const { createProduct, getProduct, getProductById, updateProduct, deleteProduct } = require('../controllers/productControllers');

const router = express.Router();
const productRouter=express.Router();
productRouter.post('/',createProduct);
productRouter.get('/', getProduct);
productRouter.get('/:id',getProductById );
productRouter.put('/:id', updateProduct);
productRouter.delete('/:id',deleteProduct);

module.exports = productRouter;
