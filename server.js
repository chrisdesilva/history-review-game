const express = require('express');
const app = express();

const port = process.env.PORT || 5000;

// Create a server, uses `handleRequest` which is function that takes
// care of providing requested data
const server = http.createServer(handleRequest);

// Start the server
server.listen(PORT, () => {
  console.log('Server listening on: http://localhost:%s', PORT);
});

// create a GET route
app.get('/express', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));