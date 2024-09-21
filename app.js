const http = require('http');


// Creating a basic server
const server = http.createServer((req, res) => {
    res.writeHead(200, {'Context-Type': 'text/html'})
    res.write("Welcome to my Page!")
    res.end()
});


// Listening on port 3000
server.listen(3500, () => {
  console.log('Server running on http://localhost:3500');
});
