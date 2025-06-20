const mongoose = require('mongoose');

const  productSchema= new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: mongoose.Schema.Types.ObjectId,ref:'User' },
  price:{type:Number,required:true}
});

module.exports = mongoose.model('product', productSchema);
