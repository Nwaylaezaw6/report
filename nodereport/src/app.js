// index.js
const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const JWT_SECRET = 'your_jwt_secret_here'; // use env variable in production

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/jwtcrud', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// User Schema and Model
const UserSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  password: String,
});
const User = mongoose.model('User', UserSchema);

// Item Schema and Model
const ItemSchema = new mongoose.Schema({
  name: String,
  description: String,
  userId: mongoose.Schema.Types.ObjectId, // owner of the item
});
const Item = mongoose.model('Item', ItemSchema);

// Middleware to verify JWT token and add user to req
const authMiddleware = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1]; // Bearer TOKEN
  if (!token) return res.status(401).json({ message: 'No token provided' });

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) return res.status(401).json({ message: 'Invalid token' });
    req.userId = decoded.id;
    next();
  });
};

// Register route
app.post('/register', async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) return res.status(400).json({ message: 'Missing username or password' });

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const user = new User({ username, password: hashedPassword });
    await user.save();
    res.json({ message: 'User registered successfully' });
  } catch (err) {
    res.status(400).json({ message: 'Username already exists' });
  }
});

// Login route
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) return res.status(400).json({ message: 'Missing username or password' });

  const user = await User.findOne({ username });
  if (!user) return res.status(401).json({ message: 'Invalid username or password' });

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.status(401).json({ message: 'Invalid username or password' });

  const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1h' });
  res.json({ token });
});

// CRUD routes for items (protected)
app.post('/items', authMiddleware, async (req, res) => {
  const { name, description } = req.body;
  const item = new Item({ name, description, userId: req.userId });
  await item.save();
  res.json(item);
});

app.get('/items', authMiddleware, async (req, res) => {
  const items = await Item.find({ userId: req.userId });
  res.json(items);
});

app.get('/items/:id', authMiddleware, async (req, res) => {
  const item = await Item.findOne({ _id: req.params.id, userId: req.userId });
  if (!item) return res.status(404).json({ message: 'Item not found' });
  res.json(item);
});

app.put('/items/:id', authMiddleware, async (req, res) => {
  const item = await Item.findOneAndUpdate(
    { _id: req.params.id, userId: req.userId },
    req.body,
    { new: true }
  );
  if (!item) return res.status(404).json({ message: 'Item not found or unauthorized' });
  res.json(item);
});

app.delete('/items/:id', authMiddleware, async (req, res) => {
  const item = await Item.findOneAndDelete({ _id: req.params.id, userId: req.userId });
  if (!item) return res.status(404).json({ message: 'Item not found or unauthorized' });
  res.json({ message: 'Item deleted' });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
