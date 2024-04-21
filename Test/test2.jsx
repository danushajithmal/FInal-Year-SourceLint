const userUrl = uservariable;
document.getElementById('myLink').href = userUrl;


const userUrl2 = decodeURI(uservariable);
document.getElementById('myLink').href = userUrl2;


const userUrl3 = uservariable;
document.getElementById('myLink').href = encodeURI(userUrl3);