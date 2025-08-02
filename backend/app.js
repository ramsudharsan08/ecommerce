require('dotenv').config();

const express = require('express');
const app = express();
const dotenv = require('dotenv');
const path = require('path');
const cors = require('cors');
const connectDatabase = require('./config/connectDatabase');

// Load environment variables
dotenv.config({ path: path.join(__dirname, 'config', 'config.env') });

// ✅ Middleware to parse JSON bodies
app.use(express.json());

// Routes
const product = require('./routes/product');
const order = require('./routes/order');

connectDatabase();

app.use(express.json())
app.use(cors());
app.use('/api/v1', product);
app.use('/api/v1', order);

// Start server
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT} in ${process.env.NODE_ENV} mode`);
});

app.use('/api/xyz', require('./routes/xyz'));

// Serve React frontend in production
app.use(express.static(path.join(__dirname, '../frontend/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
});