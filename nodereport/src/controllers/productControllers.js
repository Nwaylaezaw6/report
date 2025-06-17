const Product = require('../models/productModels');

// Create a new user
const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all users
const getProduct= async (req, res) => {
  try {
    const product = await Product.find().populate('category');
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get user by ID
const getProductById= async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).populate('category');
    if (!product) return res.status(404).json({ error: 'User not found' });
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update user by ID
 const updateProduct= async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true }).populate('category');
    if (!updatedProduct) return res.status(404).json({ error: 'product not found' });
    res.json(updatedProduct);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete user by ID
 const deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct) return res.status(404).json({ error: 'User not found' });
    res.json({ message: 'User deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports={createProduct,getProduct,getProductById,updateProduct,deleteProduct};