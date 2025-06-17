const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');



const app = express();
const port = 5000;
//const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/users_db';

app.use(express.json());

app.use('/users', userRoutes);


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


