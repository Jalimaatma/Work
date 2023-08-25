const http = require('http');
const fs = require('fs');
const content = fs.readFileSync("hellow.txt");

const server = http.createServer((req, res) => {
    console.log(req.url);
    res.writeHead(200, { 'Content-type': 'text/html' });
    res.end(content);
});
server.listen(80, '127.0.0.1',()=> {
    console.log("Server is listening on port 80");

});