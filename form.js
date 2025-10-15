const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    console.log(req.url);

    if (req.url == '/') {
        fs.readFile('HTML/form.html', 'utf-8', (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/html' });
                return res.end("Error loading form.html");
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
    } 
    else if (req.url == '/submit') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end("<h1>Form Submitted</h1>");
    } 
    else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end("<h1>404 Not Found</h1>");
    }

}).listen(5000);