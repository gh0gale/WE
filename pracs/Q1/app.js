const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
  const acceptHeader = req.headers['accept'];
  
  if (acceptHeader && acceptHeader.includes('text/html')) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Hello, this is an HTML response!</h1>');
  } else {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, this is a plain text response!');
  }
});

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
