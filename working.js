//Internal working of node js 
//Components:
//Call Stack → Executes your main code line by line.
//Node.js APIs → Handle asynchronous tasks (like reading files, timers, HTTP requests).
//Callback Queue → Stores callback functions that are ready to be executed.
//Event Loop → The traffic controller — it decides when callbacks move from the queue to the call stack.

console.log("1:Start");
setTimeout(()=>{
    console.log("2.Inside setTimeout");
},2000);

console.log("3:End");


//Execution Flow:
//1. "1:Start" is logged to the console.
//2. setTimeout is called, and its callback is sent to Node.js APIs to wait for 2000ms.
//3. "3:End" is logged to the console.
//4. After 2000ms, the callback from setTimeout is moved to the Callback Queue.
//5. The Event Loop checks if the Call Stack is empty and then pushes the callback to the Call Stack.
//6. "2.Inside setTimeout" is logged to the console.

//========================== Output ===========================//
// 1: Start
// 3: End
// 2: Inside setTimeout

//       ┌────────────────────────┐
//       │      Call Stack        │
//       └─────────┬──────────────┘
//                 │
//                 ▼
//          ┌──────────────┐
//          │ Node.js APIs │ ← Handles async tasks (setTimeout, fs, http)
//          └──────┬───────┘
//                 │
//                 ▼
//          ┌──────────────┐
//          │ Callback Queue│ ← Holds ready-to-run callbacks
//          └──────┬────────┘
//                 │
//                 ▼
//           🔁 Event Loop  ← Moves callbacks to Call Stack when empty


//Read File Example
const fs = require('fs');
console.log("A: Start reading file");

fs.readFile("Text/dummy.txt", "utf-8", (err, data) => {
  console.log("B: File reading completed");
  console.log(data);//Printing file content
});

console.log("C: Other code running");
//Execution Flow:
//1. "A: Start reading file" is logged to the console.
//2. fs.readFile is called, and its callback is sent to Node.js APIs to read the file asynchronously.
//3. "C: Other code running" is logged to the console.
//4. Once the file is read, the callback is moved to the Callback Queue.
//5. The Event Loop pushes the callback to the Call Stack when it's empty.
//6. "B: File reading completed" is logged, followed by the file content.

//========================== Output ===========================//
// A: Start reading file
// C: Other code running
// B: File reading completed
// <file content here>
//======================================= Difference CallStack & Callback Queue =======================================//
//Call Stack:
//- Synchronous
//- Executes code line by line
//- LIFO (Last In, First Out) structure
//“I execute your code right now — line by line.”

//Callback Queue:
//- Asynchronous
//- Holds callbacks that are ready to be executed
//- FIFO (First In, First Out) structure
//“I hold your async functions and wait until the stack is empty, then I’ll run them.”

