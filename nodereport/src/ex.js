const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// In-memory "database"
let items = [{"name":"apple"}];
let currentId = 1;

// CREATE - Add a new item
app.post('/items', (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ error: 'Name is required' });

  const newItem = { id: currentId++, name };
  items.push(newItem);
  res.status(201).json(newItem);
});

// READ - Get all items
app.get('/items', (req, res) => {
  res.json(items);
});

// READ - Get item by id
app.get('/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const item = items.find(i => i.id === id);
  if (!item) return res.status(404).json({ error: 'Item not found' });

  res.json(item);
});

// UPDATE - Update item by id
app.put('/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { name } = req.body;
  const item = items.find(i => i.id === id);
  if (!item) return res.status(404).json({ error: 'Item not found' });
  if (!name) return res.status(400).json({ error: 'Name is required' });

  item.name = name;
  res.json(item);
});

// DELETE - Remove item by id
app.delete('/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = items.findIndex(i => i.id === id);
  if (index === -1) return res.status(404).json({ error: 'Item not found' });

  const deleted = items.splice(index, 1);
  res.json(deleted[0]);
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
