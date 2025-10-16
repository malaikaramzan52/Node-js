//synchronous Versus Asynchronous
// console.log("Statement_1");
// let a= 20;
// let b= 0;
// setTimeout(()=>{
// // console.log("Statement_2");
// b=100;
// console.log(a+b);
// }, 2000);
// console.log(a+b);
// console.log("Statement_3");

const fs = require("fs");
//This method is asynchronous
//Output :
//End Script
//Content of file.
fs.readFile('Text/myfile.txt', 'utf-8', (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
//This method is synchronous
//Output :
//Content of file.
//End Script
const data = fs.readFileSync('Text/myfile.txt', 'utf-8');
console.log(data);
console.log("End Script");