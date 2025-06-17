const express = require('express');
const mongoose = require('mongoose');
const app = express();
const multer = require('multer');
var cors=require('cors');
const path = require("path");

app.use('/upload', express.static('uploads'));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // upload directory
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

// File filter (optional)
const fileFilter = (req, file, cb) => {
  const allowedTypes = /jpeg|jpg|png/;
  const ext = allowedTypes.test(path.extname(file.originalname).toLowerCase());
  const mime = allowedTypes.test(file.mimetype);

  if (ext && mime) {
    cb(null, true);
  } else {
    cb(new Error('Only images are allowed (jpeg, jpg, png)'));
  }
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
});

// Create uploads folder if it doesn't exist
const fs = require('fs');
if (!fs.existsSync('./uploads')) {
  fs.mkdirSync('./uploads');
}

// Route to handle image upload
app.post('/upload', upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }

  res.send({
    message: 'Image uploaded successfully!',
    file: req.file,
  });
});

mongoose.connect('mongodb://localhost:27017/bookdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(()=>
console.log("mongoosedb connected")).catch
(err=> console.log(err.message))
;

app.use(express.json());
app.use(cors());

app.use('/authors', require('./routes/authorRoutes'));
app.use('/categories', require('./routes/categoryRoutes'));
app.use('/books', require('./routes/bookRoutes'));

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
