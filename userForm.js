function userForm(req, res) {
    res.write(`
        <form action="/submit" method="POST">
            <input type="text" name="name" placeholder="Enter your name" />
            <input type="text" name="email" placeholder="Enter your email" />
            <button type="submit">Submit</button>
        </form>
    `);
    res.end(); // End the response *inside* the function
}

module.exports = userForm;
