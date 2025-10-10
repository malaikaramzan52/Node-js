// export let userName = "Malaika Ramzan";
//Define Multiple functions 
function sum(a,b){
    return a+b;
}
function subtract(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    if(b===0){
        return "Error: Division by zero";
    }
    return a/b;
}
//Export multiple functions
module.exports={sum, subtract, multiply, divide};