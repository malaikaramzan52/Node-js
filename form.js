// This code create HTML form on Server and handle form submission
// extract form data
// and create text file with form data
const http = require('http');// Importing the HTTP module to create a server
const fs = require('fs');// Importing the File System module to read files
const querystring = require('querystring')// Importing the Query String module to parse form data

// Creating an HTTP server

http.createServer((req, res) => {
    console.log(req.url);

    if (req.url == '/') {
        fs.readFile('HTML/form.html', 'utf-8', (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/html' });
                return res.end("Error loading form.html");
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
    }
    else if (req.url == '/submit') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        let dataBody = [];
        // Listening to data event to collect the form data
        req.on('data', (chunk) => {
            dataBody.push(chunk);
        });
        // Listening to end event to know when the data collection is complete
        req.on('end', () => {
            let rawData = Buffer.concat(dataBody).toString();// Converting buffer to string
            let readableData = querystring.parse(rawData);// Parsing the form data
            console.log(readableData);
            res.write(`<h1>Form Submitted Successfully</h1>`);
            res.write(`<p>Received Data: ${JSON.stringify(readableData)}</p>`);// Sending back the received data as a response
            let dataString = `My name is ${readableData.name} and my email address is ${readableData.email}.`;// Creating a formatted string using the received data
            //======================================== Create file Synchronously =========================================
            // fs.writeFileSync('text/'+readableData.name+'.txt',dataString);// Writing the formatted string to a text file
            // console.log('File Created');
            //======================================== Create file Asynchronously =========================================
            fs.writeFile('text/' + readableData.name + '.txt', dataString, (err) => {
                if (err)
                    throw err;
                console.log('File Created');
            });

            console.log(dataString);// Logging the formatted string to the console
            res.end();
        });

    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end("<h1>404 Not Found</h1>");
    }

}).listen(5000);

//====================================== Buffer ============================================
//A buffer is a temporary storage area in memory that holds data
//while it’s being transferred from one place to another — like from a file or network to your program.

//============================ Handle Form Request =============================================
// also included in above code

//============================= Create File from Form Data ======================================
// also included in above code
//======================================== Create file Synchronously ============================
// Synchronous (fs.writeFileSync)
// The program waits until the file is completely written.
// It blocks other code from running until the task finishes.
// Slower if many files are written or if the file is large.
// Example: “Wait here until I finish writing this file.”

//======================================== Create file Asynchronously ===========================
// Asynchronous (fs.writeFile)
// The program can do other things while the file is being written.
// It doesn’t block other code from running.
// Faster for many files or large files.
// Example: “Start writing this file, and I’ll check back later.”
