const Input1 = userInput1;
document.getElementById('output').innerHTML = Input1;

document.getElementById('output').textContent = Input1;

document.getElementById('output').innerHTML = DOMPurify.encodeURI(Input1);


//DOM Manipulation
const Input2 = userInput2;
var div = document.createElement('div');
div.innerHTML = Input2;
document.body.appendChild(div);

var div = document.createElement('div');
div.textContent = Input2;  
div.innerHTML = DOMPurify.encodeURI(Input2); 
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
const Input3 = userInput3;
document.cookie = 'session=' + Input3;

document.cookie = 'session=' + encodeURIComponent(Input3);


const feedbackMessage = document.getElementById('feedback');
const Input4 = document.getElementById('userInput').value;

feedbackMessage.innerHTML = 'Thank you for your message: ' + Input4;
feedbackMessage.textContent = 'Thank you for your message: ' + Input4;


// Assuming a templating engine like Handlebars, EJS, etc.
const template1 = `<div>User comment: ${userComment}</div>`;
document.getElementById('commentSection').innerHTML = template1;

document.getElementById('commentSection').innerHTML = DOMPurify.encodeURIComponent(template1);


const userData1 = userInput1;
document.write('<div>' + userData1 + '</div>');

const userData2 =  DOMPurify.sanitize(userInput1);
document.write('<div>' + userData2 + '</div>');



const data = userInput1;
eval(data);
eval(encodeURI(data));



const userUrl = uservariable;
document.getElementById('myLink').href = userUrl;

const userUrl2 = decodeURI(uservariable);
document.getElementById('myLink').href = userUrl2;

const userUrl3 = uservariable;
document.getElementById('myLink').href = encodeURI(userUrl3);







const userComment = encodeURIComponent(userInput1);
document.getElementById('comment').innerHTML = userComment;
