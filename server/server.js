const express = require('express');
const path = require('path');
const cors = require('cors'); // Import the cors middleware

const app = express();
const port = 5000; // or any other port you prefer

app.use(cors()); // Enable CORS for all routes
app.use(express.static(path.join(__dirname, 'public')));

app.get('/data', (req, res) => {
  res.sendFile(path.join(__dirname, 'data.json'));
});
app.get('/web', (req, res) => {
  res.sendFile(path.join(__dirname, 'websites.json'));
});

app.get('/web', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages.json'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
