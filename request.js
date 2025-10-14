//What is client request?
//A client request is an HTTP request sent by a client (such as a web browser or mobile app) to a server to retrieve or send data. 
const http = require('http');
http.createServer((req,res)=>{
    console.log(req.method);//to check header ,host, url ,method, body
    if(req.url === '/'){
        res.write('<h1>Home Page</h1>');
    }
    else if(req.url === '/about'){
        res.write('<h1>About Page</h1>');
    }
    else if(req.url === '/login'){
        res.write('<h1>Login Page</h1>');
    }
    else if(req.url === '/contact'){
        res.write('<h1>Contact us Page</h1>');
    }
    else{
        res.write('<h1>404 Page Not Found</h1>');
    }
    res.end();
}).listen(5600);

