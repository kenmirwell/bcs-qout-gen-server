const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

let items = [{ name: 'Sample Item 1' }, { name: 'Sample Item 2' }];

// Endpoint to fetch items
app.get('/api', (req, res) => {
  res.json(items);
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});