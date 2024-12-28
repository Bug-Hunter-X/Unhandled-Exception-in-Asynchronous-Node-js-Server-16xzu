const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate an asynchronous operation that might throw an error
  setTimeout(() => {
    if (Math.random() < 0.5) {
      // Simulate an error
      throw new Error('Something went wrong!');
    } else {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Hello World!');
    }
  }, 1000);
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});