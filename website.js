//================ Import Required Modules =================//
const fs = require('fs');      // For reading files
const http = require('http');  // For creating HTTP server

//================ Create Server =================//
http.createServer((req, res) => {

    // Read footer and header once (static content)
    let footer = fs.readFileSync('HTML/footer.html', 'utf-8');
    let collectHeaderData = fs.readFileSync('HTML/header.html', 'utf-8');

    // Default file path
    let file = "/home";

    // If user requests another page (like /about, /contact etc.)
    if (req.url != '/') {
        file = req.url;
    }

    //================ Serve HTML Files =================//
    if (req.url != '/style.css') {
        // Read and display HTML file with header and footer
        fs.readFile("HTML" + file + ".html", "utf-8", (err, data) => {
            if (err) {
                // If file not found, show 404 error
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end("Error: File Not Found");
                return;
            }
            // Combine header + page content + footer
            res.write(collectHeaderData + data + footer);
            res.end();
        });
    }

    //================ Serve CSS File =================//
    else if (req.url == '/style.css') {
        fs.readFile('HTML/style.css', 'utf-8', (err, data) => {
            if (err) {
                // If CSS not found
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end("Error: File Not Found");
                return;
            }
            // Send CSS file with proper header
            res.writeHead(200, { 'Content-Type': 'text/css' });
            res.end(data);
        });
    }

}).listen(3200);  //================ Server running on port 3200 =================//

