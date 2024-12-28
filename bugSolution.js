const http = require('http');

const server = http.createServer((req, res) => {
  setTimeout(() => {
    try {
      if (Math.random() < 0.5) {
        throw new Error('Something went wrong!');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello World!');
      }
    } catch (error) {
      console.error('Error:', error.message);
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Internal Server Error');
    }
  }, 1000);
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
//Alternative solution using process.on('uncaughtException') for handling errors outside of request handling
process.on('uncaughtException', (err) => {
  console.error('An unhandled exception occurred: ', err);
  process.exit(1);
});