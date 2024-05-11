// Ignored Warning: 99739

const nodemailer = require('nodemailer');
const express = require('express');
const app = express();
app.use(express.json());

function sanitizeEmailInput(input) {
    return input.replace(/(\r\n|\n|\r)/gm, ""); // Remove new line characters
}

app.post('/send-email', async (req, res) => {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'your-email@gmail.com',
            pass: 'your-password'
        }
    });

    //Vulnerable Header
    const mailOptions1 = {
        from: req.body.from, // User input directly used in header
        to: 'recipient@example.com',
        subject: req.body.subject, // User input directly used in header
        text: 'Hello world?'
    };

    //method1
    transporter.sendMail(mailOptions1, function(error, info){
        if (error) {
            console.log(error);
            res.send('error');
        } else {
            console.log('Email sent: ' + info.response);
            res.send('Email sent');
        }
    });

    //method2
    await transporter.sendMail(mailOptions1);
    res.send('Email sent successfully');

    //method3
    transporter.sendMail(mailOptions1)
    .then(info => {
        console.log('Email sent: ' + info.response);
        res.send('Email sent successfully');
    })
    .catch(error => {
        console.log(error);
        res.status(500).send('Error sending email');
    });

    //Secure Header
    const mailOptions2 = {
        from: sanitizeEmailInput(req.body.from), // Sanitized input
        to: 'recipient@example.com',
        subject: sanitizeEmailInput(req.body.subject), // Sanitized input
        text: 'Hello world?'
    };

    transporter.sendMail(mailOptions2, function(error, info){
        if (error) {
            console.log(error);
            res.send('error');
        } else {
            console.log('Email sent: ' + info.response);
            res.send('Email sent');
        }
    });
});

app.listen(3000, () => console.log('Server started'));
