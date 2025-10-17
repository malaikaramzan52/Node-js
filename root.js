const http = require('http');        // Import http module
const userForm = require('./userForm'); // Import userForm module
const userDatasubmit = require('./UserDatasubmit'); // Import UserDatasubmit module

// Create server
http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    if(req.url=="/"){
        userForm(req, res);
    }
    else if(req.url=='/submit'){
        userDatasubmit(req, res);
    }
}).listen(5000);
