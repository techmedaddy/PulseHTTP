const express = require('express');
const app = express();
const port = 3000;

// Middleware to handle JSON requests
app.use(express.json());

// Basic GET route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Basic POST route
app.post('/data', (req, res) => {
  res.json(req.body);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
