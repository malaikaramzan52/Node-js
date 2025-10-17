const querystring = require('querystring');

function userDatasubmit(req, res) {
    let dataBody = [];

    req.on('data', chunk => {
        dataBody.push(chunk);
    });

    req.on('end', () => {
        // Combine all data chunks
        let rawData = Buffer.concat(dataBody).toString();

        // Parse the form data
        let readableData = querystring.parse(rawData);

        // Create a formatted string
        let dataString = "My name is " + readableData.name + " and my email is " + readableData.email;

        console.log(dataString);

        // Send response back to browser
        res.write(`<h1>Data Submitted Successfully!</h1>`);
        res.write(`<p>${dataString}</p>`);
        res.end();
    });
}

module.exports = userDatasubmit;
