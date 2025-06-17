const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const JWT_SECRET = process.env.JWTSECRET;

const protect = async (req, res, next) => {
  let token = req.headers["token"];


    try {
      const decoded = jwt.verify(token, JWT_SECRET||"ffdkjfkld12183892934");

      req.user = await User.findById(decoded.id).select('-password');
      next();
    } catch (error) {
      return res.status(401).json({ message: 'Not authorized, token failed' });
    }
 
};

module.exports = { protect };
