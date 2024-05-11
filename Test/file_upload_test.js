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

    //Direct uploading function without validation
    //Method 1
    uploadedFile1.mv(`/uploads/${uploadedFile1.name}`, err => {
        if (err) {
            return res.status(500).send(err);
        }
        res.send('File uploaded!');
    });

    //Method 2
    uploadedFile1.mv(`/uploads/${uploadedFile1.name}`).then(() => {
        res.send('File uploaded successfully!');
    }).catch(err => {
        res.status(500).send(err);
    });

    //Method 3
    const stream = fs.createWriteStream(`/uploads/${uploadedFile1.name}`);
    uploadedFile1.data.pipe(stream);

    //Method 4
    uploadedFile1.mv(path.join(__dirname, 'temp', uploadedFile1.name), err => {
        if (err) return res.status(500).send(err);
        fs.rename(path.join(__dirname, 'temp', uploadedFile1.name), `/uploads/${uploadedFile1.name}`, err => {
            if (err) return res.status(500).send(err);
            res.send('File uploaded successfully!');
        });
    });
});

// Route for file upload with extension check - secure
app.post('/upload/extension-checked', (req, res) => {
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

// Route for file upload with file size check - secure
app.post('/upload/size-checked', (req, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }

    let uploadedFile3 = req.files.uploadedFile;

    // Check file size (e.g., max 5 MB)
    const maxFileSize = 5 * 1024 * 1024; // 5 MB in bytes
    if (uploadedFile3.size > maxFileSize) {
        return res.status(400).send('File size exceeds the maximum limit.');
    }

    uploadedFile3.mv(`./uploads/${uploadedFile3.name}`, err => {
        if (err) {
            return res.status(500).send(err);
        }
        res.send('File uploaded successfully!');
    });
});

// Route for file upload with MIME check - secure
app.post('/upload/MIME-checked', (req, res) => {

    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }

    let uploadedFile4 = req.files.uploadedFile;

    const allowedMimeTypes = ['image/jpeg', 'image/png', 'application/pdf'];
    if (!allowedMimeTypes.includes(uploadedFile4.mimetype)) {
        return res.status(400).send('Invalid file type.');
    }

    uploadedFile4.mv(`./uploads/${uploadedFile4.name}`, (err) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.send('File uploaded successfully!');
    });
});


app.listen(3000, () => {
    console.log('Server started on port 3000');
});