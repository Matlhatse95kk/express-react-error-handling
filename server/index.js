const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Add console log to trace requests
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// Example route
app.get('/api/hello', (req, res) => {
  console.log('Hello endpoint hit');
  res.json({ message: 'Hello from server' });
});

// 🟥 Error handler with stack trace
app.use((err, req, res, next) => {
  console.error('❌ Error:', err.stack);
  res.status(500).json({ message: 'Internal server error', error: err.message });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

module.exports = app; // for testing