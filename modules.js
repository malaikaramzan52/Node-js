// Modules
//block of code that perform specific task
//========================= Types of Modules =================================
//1. Core Modules,Built-in Modules
//2. Custom Modules
//3. Third-Party Modules

const fs = require('fs');         //core module---> file system
fs.writeFileSync('dummy.txt', 'Trying to Learn Modules in Node Js ');
const os = require('os');         //core module---> operating system
console.log(os.platform());       //to check the platform of the system
console.log(os.arch());           //to check the architecture of the system
console.log(os.freemem());       //to check the free memory of the system in bytes
console.log('Memory in MB:',os.freemem()/1024/1024); //to check the free memory of the system in MB
console.log(os.totalmem());      //to check the total memory of the system in bytes
console.log(os.hostname());      //to check the hostname of the system
console.log(os.cpus());          //to check the CPU information of the system

//========================= Global Objects =================================
console.log("abc");
console.log(process.cwd());   //current working directory
console.log(process.pid);   //process id


//=========================== Difference between Core Modules and Global Objects ======================
//Global Objects is an object that is available in all modules by default.
//Core Modules are the modules that are provided by Node.js and can be imported using require() function.


//=========================== Custom Global Objects ======================
const {log,warn} = require("console");
log("Custom Log Message");   //using destructuring assignment to get the log method from console module
warn("Custom Warning Message");   //using destructuring assignment to get the warn method from console module