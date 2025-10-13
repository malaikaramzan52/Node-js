//Server
const http = require('http');
http.createServer((req,res)=>{
    res.write("<h1>This is harry</h1>");
    res.end("<p>Hello World</p>");
}).listen(4800);


const server2 = http.createServer((req,res)=>{
    res.write("<h1>This is server 2</h1>");
    res.end("<p>Hello from server 2</p>");
});

server2.listen(4801);

//============================================= Questions =============================================//
//By using which package we can create server?
//Ans: http package
//Which method is used to create server?
//Ans: createServer() method
//Which method is used to make server listen on a particular port?
//Ans: listen() method

