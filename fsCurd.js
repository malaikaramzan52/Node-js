const fs = require('fs');
console.log(process.argv[2]);
const operation = process.argv[2];
if(operation=='write'){
    const name = process.argv[3];
    const content= process.argv[4];
    const fullname=`files/${name}.txt`;
    console.log(operation,name,content);
    fs.writeFileSync(fullname, content);

}
// fs.writeFileSync('files/apple.txt','Apple is a fruit');
// fs.writeFileSync('files/banana.txt','Banana is a fruit');

//Delete a file
// fs.unlinkSync('files/banana.txt');
// //Read a file
// // const data=fs.readFileSync('files/apple.txt','utf-8');
// // console.log(data);
// //Update a file
// fs.appendFileSync('files/apple.txt','\nApple is red or green in color');
// const data=fs.readFileSync('files/apple.txt','utf-8');
// console.log(data);