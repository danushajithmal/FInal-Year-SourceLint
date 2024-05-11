app.post('/update-email', function (req, res) {

    // updates the email based on POST data

    user.email = req.body.email;

    res.send("Email updated successfully!");
});