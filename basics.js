//=================Fundamentals of Node JS=================//
// const data = require('./data');
// console.log(data.userName);
//==========================import multiple functions==================================//
const {sum, subtract, multiply, divide} = require('./data.js');
console.log(sum(10, 20));       // 30
console.log(subtract(10, 5));   // 5
console.log(multiply(5, 3));    // 15
console.log(divide(10, 2));  

//=========================Variables========================//
var a = 10;
let b = 20;
const c = 30;
b = 100;
a = 200;
console.log(a + b + c);
//=========================If condition========================//
if (a == 200) {
    console.log("a is 200");
}
else{
    console.log("b is 100");
}
//=========================Function=========================//
function add(x,y){
    return x+y;
}
console.log(add(10,20));

function fruit(item){
    console.log("Fruit name is "+item);
}
console.log("apple");

//=========================Loops===========================//
for(let a=0;a<=5;a++){
    console.log(a);
}
let x=0;
while(x<=5){
    console.log(x);
    x++;
}

//=========================Array=========================//
let arr = [10,20,30,40,50];
// console.log(arr);
// console.log(arr[2]);
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}

//=========================Object========================//
const obj={
    name:"Malaika Ramzan",
    age:21,
    city:"Multan"
}
console.log(obj);
