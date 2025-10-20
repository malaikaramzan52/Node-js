//Path module and Global constant 
//==================What is Path Module ==================
// In Node.js the path module is a built-in core module that provides utilities 
// for working with file and directory paths.

//=================What is Global Constant ===============
//In Node.js, a global constant is a value that is always available 
//in your code without requiring an import or declaration.

const path = require('path');
const file = "Text/dummy.txt"
//===========extension name================
//console.log(path.extname(file));

//===============director name ============
console.log(path.dirname(file));//folder name 

//==================Base name ============
console.log(path.basename(file));//file name 

//================To Create Complete Root Path============
console.log(path.resolve("text","dummy.txt"));

//=============to check path is Relative or Absolute =======
console.log(path.isAbsolute(file));   //false 


//Relative Path 
// A relative path means the file path is based on your current location (current folder).
// It changes if you move your file to another folder.
//Example:Current file/folder

//Absolute Path
//An absolute path is the complete address of a file or folder starting from the root (main directory) of your computer.
// It never changes, no matter where your Node.js file is.
//Example: Root directory==>   fs.readFileSync('C:/Users/Dell/Desktop/NodeApp/data/info.txt', 'utf-8');

//Global Constants

//=================== Directory name =======================
console.log(__dirname);    //current directory name 
//=================== File name ====================
console.log(__filename);   // current file name 