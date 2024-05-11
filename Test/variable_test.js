//sample malicious CSS input
const userInput = "color: red; background: url('javascript:alert(\"XSS\")')";

//vulnerable use of the input
const userStyle = userInput; 
document.getElementById('styledElement').style.cssText = userStyle;

//secure use of the input
const sanitizeduserStyle = dosanitize(userInput); 
document.getElementById('styledElement').style.cssText = sanitizeduserStyle;


function dosanitize(userInput) {
    const allowedProperties = ['color', 'background-color', 'margin', 'padding'];
    let sanitizedStyles = '';
    userInput.split(';').forEach(style => {
        const [property, value] = style.split(':').map(s => s.trim());
        if (allowedProperties.includes(property)) {
            sanitizedStyles += `${property}: ${value};`;
        }
    });
    return sanitizedStyles;
}


