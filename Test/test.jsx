//Dynamic HTML Generation
const Input1 = 'ABC'
document.getElementById('output').innerHTML = Input1;
// For plain text
document.getElementById('output').textContent = userInput1;
// For HTML content, with DOMPurify
document.getElementById('output').innerHTML = DOMPurify.encodeURI(userInput1);


//DOM Manipulation
var div = document.createElement('div');
div.innerHTML = userInput1;
document.body.appendChild(div);

var div = document.createElement('div');
div.textContent = userInput; // For plain text  
div.innerHTML = DOMPurify.encodeURI(userInput); // Or, for HTML
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
        document.getElementById('output').innerHTML = DOMPurify.encodeURI(data.result);
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
document.getElementById('commentSection').innerHTML = DOMPurify.encodeURIComponent(template2);



const userData1 = userInput1;
document.write('<div>' + userData1 + '</div>');

const userData2 = userInput2;
document.write('<div>' + encodeURIComponent(userData2) + '</div>');



const data = userInput1;
eval(data);

const  data2 = userInput1;
eval(encodeURI(data2));

const userUrl = uservariable;
document.getElementById('myLink').href = userUrl;

const userUrl2 = encodeURI(uservariable2); 
document.getElementById('myLink').href = userUrl2;


const userStyle = decodeURI(userInput6); 
document.getElementById('styledElement').style.cssText = userStyle;

const userComment = encodeURIComponent(userInput1);
document.getElementById('comment').innerHTML = userComment;
