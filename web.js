const http = require('http');
const fs = require('fs');
http.createServer((req, res) => {
    fs.readFile('HTML/web.html','utf-8',(error,data)=>{
        if(error){
            res.writeHead(500,{'Content-Type':'text/plain'});//500 means internal server error
            res.write("Internal Server Error");
            res.end();
        }
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);
        res.end();

    })
}).listen(5000);
//fs--->file system module
//readFile--->to read the file
//utf-8--->encoding format that is used to read the file
//error--->if any error occurs while reading the file it will be stored in this variable
//data--->the content of the file will be stored in this variable
//writeHead--->to write the header of the response