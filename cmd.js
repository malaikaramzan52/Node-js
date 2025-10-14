//Get input from command line in node.js
//What is getting input from cmd line?
const http = require('http');
const arg = process.argv;
const port = arg[2]   //4100
http.createServer((req,res)=>{
   res.write("Testing input from cmd line");
   res.end();
}).listen(port);

//1st  node path
//2nd path of js file














// const arg = process.argv;
// console.log("Hello World");
// console.log(arg[3]);//array of strings