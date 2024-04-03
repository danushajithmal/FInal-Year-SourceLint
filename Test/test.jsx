//Dynamic HTML Generation
document.getElementById('output').innerHTML = userInput;
// For plain text
document.getElementById('output').textContent = userInput;
// For HTML content, with DOMPurify
document.getElementById('output').innerHTML = DOMPurify.sanitize(userInput);


//DOM Manipulation
var div = document.createElement('div');
div.innerHTML = userInput;
document.body.appendChild(div);

var div = document.createElement('div');
div.textContent = userInput; // For plain text
div.innerHTML = DOMPurify.sanitize(userInput); // Or, for HTML
document.body.appendChild(div);

//AJAX responses
fetch('/api/data?query=' + userInput)
    .then(response => response.json())
    .then(data => {
        document.getElementById('output').innerHTML = data.result;
    });

fetch('/api/data?query=' + encodeURIComponent(userInput))
    .then(response => response.json())
    .then(data => {
        document.getElementById('output').innerHTML = DOMPurify.sanitize(data.result);
    });


//Cookies without input sanitization
document.cookie = 'session=' + userInput;

document.cookie = 'session=' + encodeURIComponent(userInput);


const feedbackMessage = document.getElementById('feedback');
const userInput1 = document.getElementById('userInput').value;
feedbackMessage.innerHTML = 'Thank you for your message: ' + userInput;

const feedbackMessage = document.getElementById('feedback');
const userInput2 = document.getElementById('userInput').value;
feedbackMessage.textContent = 'Thank you for your message: ' + userInput;


// Assuming a templating engine like Handlebars, EJS, etc.
const template1 = `<div>User comment: ${userComment}</div>`;
document.getElementById('commentSection').innerHTML = template1;

// Using a templating engine that escapes values automatically
const template2 = `<div>User comment: ${userComment}</div>`;
document.getElementById('commentSection').innerHTML = DOMPurify.sanitize(template2);



const userData1 = userInput;
document.write('<div>' + userData + '</div>');

const userData2 = userInput;
document.write('<div>' + encodeURIComponent(userData2) + '</div>');



const data = userInput;
eval(data);

// If userInput is JSON data
const data2 = userInput;
eval(JSON.parse(data2));w


const userUrl = userInput; // User-supplied URL
document.getElementById('myLink').href = userUrl;

const userStyle = userInput; // Potentially malicious style input
document.getElementById('styledElement').style.cssText = userStyle;

const userComment = decodeURIComponent(userInput);
document.getElementById('comment').innerHTML = userComment;
