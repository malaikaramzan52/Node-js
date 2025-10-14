//Making simple APIs 
const http = require('http');
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