var http = require('http');

var PORT = 8080;

var server = http.createServer((request, response) => {
    response.end('You requested ' + request.url);
});

server.listen(PORT, () => {
    console.log("Server listening on http://localhost:%s", PORT);
});