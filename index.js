// index.js

const http = require('http');

// Create an HTTP server
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, World!\n,my name is rahul barot\ni am Devops Engineer at GTCSYS\nMAHADEV\nMAHADEV');
});

// Set the server to listen on port 3000
server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});

