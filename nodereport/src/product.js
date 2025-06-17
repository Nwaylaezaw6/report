const express = require('express');
const mongoose = require('mongoose');
const productRouter = require('./routes/productRoutes');


const app = express();
const port = 4000;

app.use(express.json());
app.use('/products', productRouter);

mongoose.connect('mongodb://127.0.0.1:27017/test')
.then(() => {
    console.log('MongoDB connected');
    
    
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
  });

 app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});


