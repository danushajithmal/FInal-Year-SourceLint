const express = require('express');
const fileUpload = require('express-fileupload');

const app = express();
app.use(fileUpload());

// Route for basic file upload without validation - vulnerable
app.post('/upload/basic', (req, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }

    let uploadedFile1 = req.files.uploadedFile;
    uploadedFile1.mv(`/uploads/${uploadedFile1.name}`, err => {
        if (err) {
            return res.status(500).send(err);
        }
        res.send('File uploaded!');
    });
});

// Route for file upload with extension check - secure
app.post('/upload/secure', (req, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }

    let uploadedFile2 = req.files.uploadedFile;
    const fileExtension = path.extname(uploadedFile2.name).toLowerCase();
    const allowedExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.pdf'];

    if (!allowedExtensions.includes(fileExtension)) {
        return res.status(400).send('Invalid file type.');
    }

    uploadedFile2.mv(`/uploads/${uploadedFile2.name}`, err => {
        if (err) {
            return res.status(500).send(err);
        }
        res.send('File uploaded successfully!');
    });
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});