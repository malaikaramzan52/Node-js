//Get input from command line in node.js
//What is getting input from cmd line?
const http = require('http');
const arg = process.argv;
// process is a global object in Node.js
// argv stands for Argument Vector (list of arguments)
// process.argv gives an array containing:
// 1.Node.js path
// 2.File path
// 3.Arguments you enter in command line
console.log(arg[2]);     //print the terminal input value 

http.createServer((req,res)=>{
   res.write("Testing input from cmd line");
   res.end();
}).listen(4100);

//1st  node path
//2nd path of js file
// const arg = process.argv;
// console.log("Hello World");
// console.log(arg[3]);//array of strings