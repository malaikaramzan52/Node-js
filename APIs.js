//Making simple APIs 
const http = require('http');
// Create a web server
// Receive requests from the browser
// Send responses back to the browser
const userData = [
    {
        name: "John",
        age: 30,
        city: "New York"
    },
    {
        name: "sam",
        age: 20,
        city: "USA"
    },
    {
        name: "peter",
        age: 25,
        city: "USA"
    }

]//Array of objects
http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.write(JSON.stringify(userData));
    res.end();
}).listen(8080);