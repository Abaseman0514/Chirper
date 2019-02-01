let submitButton = document.getElementById("submit-message");
let imageButton = document.getElementById("submit-image");
let messageArray = [];
let messages = "";

function addToArray() {
 let message = document.getElementById("message-input").value;
 messageArray.push(message);
}

function addImageToArray() {
 let image = document.getElementById("message-input").value;
 messageArray.push("<img src=" + image + "></img>");
}

function printArray() {
 let messages = "";
 for (i = 0; i < messageArray.length; i++) {
  messages += messageArray[i] + "<br>";
 }
 document.getElementById("messages").innerHTML = messages;
}

function submitClicked() {
 // let message = document.getElementById("message-input").value;
 addToArray();
 printArray();
 clearText();
 // messages += message + "<br>";
}

function imageClicked() {
 // let message = document.getElementById("message-input").value;
 addImageToArray();
 printArray();
 clearText();
 // messages += message + "<br>";
}


function clearText() {
 document.getElementById("message-input").value = "";
}

submitButton.onclick = submitClicked;
imageButton.onclick = imageClicked;