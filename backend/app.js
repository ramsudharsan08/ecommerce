const path = require('path');
require('dotenv').config({ path: path.join(__dirname, 'config', 'config.env') });

const express = require('express');
const app = express();
const cors = require('cors');
const connectDatabase = require('./config/connectDatabase');

// ✅ Connect to MongoDB
connectDatabase();

// ✅ Middleware
app.use(express.json());
app.use(cors());

// ✅ API Routes
const product = require('./routes/product');
const order = require('./routes/order');
app.use('/api/v1', product);
app.use('/api/v1', order);

// ✅ Serve frontend in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend/build')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
  });
}

// ✅ Start server (for both local & Render)
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} in ${process.env.NODE_ENV} mode`);
});