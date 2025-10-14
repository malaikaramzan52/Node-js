//What is server response?
//When you make a request to a server (like when you visit a website), the server sends back a response. This response includes information like the status of your request (was it successful or not?),
// the data you asked for (like a webpage or some information), and other details about how to handle that data.

const http = require("http");
const age =21;
http.createServer((req,res)=>{
    res.setHeader("Content-Type","text/html");
    res.write(`
        <html>
        <head>
        <title>My First Server Response</title>
        </head>
        <body>
            <h1>Hello World</h1>
            <p>This is my first server response</p>
            <h2>My age is ${age}</h2>
            <h3>${new Date()}</h3>
        </body>
        </html>`);
    res.end();          //end the response

}).listen(5000);

//to end process: process.exit() 
