const fs = require('fs');

//=============Create a file ============================//
// fs.writeFileSync("files/apple.txt","This is a Fruit");  
// fs.writeFileSync('files/banana.txt',"This is a Banana fruit");

//==========Delete a File==================================//
// fs.unlinkSync('files/banana.txt');

//===================Read content of a file ===============//
// const data = fs.readFileSync('files/apple.txt','utf-8');
// console.log(data);

//============Update Content of a file ==================//
// fs.appendFileSync('files/apple.txt',' Apple is red');

//================================== CRUD Operation with Terminal Input ============================================//

console.log(process.argv[2]);//to get specific element
//Get Three Inputs ===> name of file , content ,operation(like read,delete, update, create)
const operation = process.argv[2];  //first get operation

//=================================Write a file ========================
if(operation =="write"){
    const name=process.argv[3];     //second get name of the file 
    const content = process.argv[4]; //Third is content
    const fullname ="files/"+name+".txt";
    console.log(operation,name,content);
    fs.writeFileSync(fullname,content)// to write the file in specific folder.


}
//================================Read a file =============================
else if (operation == "read"){
    const name=process.argv[3];     //second get name of the file 
    //const content = process.argv[4]; //Third is content
    const fullname ="files/"+name+".txt";
    let data = fs.readFileSync(fullname,"utf-8")// to write the file in specific folder.
    console.log(data);


}
//================================update a file ===========================
else if (operation == "update"){
    const name=process.argv[3];     //second get name of the file 
    const content = process.argv[4]; //Third is content
    const fullname ="files/"+name+".txt";
    let data = fs.appendFileSync(fullname,content)// to write the file in specific folder.
    console.log(data);


}
//================================Delete a file ===========================
else if (operation == "delete"){
    const name=process.argv[3];     //second get name of the file 
    //const content = process.argv[4]; //Third is content
    const fullname ="files/"+name+".txt";
    fs.unlinkSync(fullname);
    console.log(data);


}
else{
    console.log("Invalid Operations");
}