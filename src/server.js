// Import the Express framework, which provides a robust set of features for web and mobile applications.
const express = require('express');

// Create an Express application instance. This object is used to configure and handle HTTP requests and responses.
const app = express();

// Define the port number that the server will listen on. Port 3000 is commonly used for development purposes.
const port = 3000;

// Middleware to parse incoming requests with JSON payloads. This allows the server to handle JSON data in POST requests.
app.use(express.json());

// Define a route handler for HTTP GET requests to the root URL ('/'). This is a basic route that responds with 'Hello World!'.
// The 'req' parameter represents the request object, and the 'res' parameter represents the response object.
app.get('/', (req, res) => {
  // Send a plain text response with the message 'Hello World!' to the client.
  res.send('Hello World!');
});

// Define a route handler for HTTP POST requests to the '/data' URL. This route is designed to handle JSON data sent in the request body.
// The 'req' parameter represents the request object, and the 'res' parameter represents the response object.
app.post('/data', (req, res) => {
  // Echo back the JSON data received in the request body as a JSON response.
  // 'req.body' contains the parsed JSON data sent by the client.
  res.json(req.body);
});

// Start the server and make it listen on the specified port (3000). The callback function logs a message when the server starts successfully.
app.listen(port, () => {
  // Log the URL where the server is accessible. This helps in verifying that the server is running and listening on the expected port.
  console.log(`Server listening at http://localhost:${port}`);
});
