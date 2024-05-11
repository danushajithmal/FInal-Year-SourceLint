const express = require('express');
const app = express();
const csrf = require('csurf');
const bodyParser = require('body-parser');

// Middleware for parsing JSON bodies
app.use(bodyParser.json());

// CSRF protection setup
const csrfProtection = csrf({ cookie: true });

// Provide CSRF token for API requests
app.get('/api/token', csrfProtection, (req, res) => {
    res.json({ csrfToken: req.csrfToken() });
});
// Securely updating user profile with CSRF protection
app.post('/api/update-profile', csrfProtection, (req, res) => {
    const profileData = req.body;
    console.log('Profile Data:', profileData);
    res.json({ message: 'Profile updated successfully!' });
});

// Normally updating user profile without CSRF protection
app.post('/api/update-profile', (req, res) => {
    const profileData = req.body;
    console.log('Profile Data:', profileData);
    res.json({ message: 'Profile updated successfully!' });
});



app.listen(3000, () => console.log('Server running on port 3000'));