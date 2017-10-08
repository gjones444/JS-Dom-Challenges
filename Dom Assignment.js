/*
Create an HTML page with two buttons that argue with each other.
When one button is clicked, the text "I'm right" should be placed next to it.
When the other button is clicked, the text is replaced with, "No, I'm right!"

Create an HTML page with a large element on the page that says "Don't hover over me" inside of it.
When you hover over the element, send an alert to the user that says, "Hey, I told you not to hover over me!"

Create an HTML page with javascript that listens for a keypress.
When the user presses that key, the text of the H1 should show the value of the key they have pressed.
Example: If the user presses "J", the text inside the H1 should be "J".

Create an HTML page with a form. The form should include inputs for a username, email, and password as well as a submit button.
In a Javascript file, write code that does the following things:
checks that the password is 12345678
checks that the username contains at least one number
if anything is wrong, send an alert message saying "incorrect"
Your page should also include an H1 tag. If the information in the form is correct, have Javascript change the text in the H1.
*/

// Button Arguments
function myArgu()
    {
        document.getElementById("text").innerHTML = "I'm Right";
    };
function myFun()
    {
        document.getElementById("text").innerHTML = "No I'm Right";
    };

// Hover over me
function mouseHover()
    {
      alert("Hey, I told you not to hover over me!");
    }

// Listen for the keypress
var listen = document.getElementById('h1-heading')

document.onkeypress = function (e) {
    e = e || window.event;
    listen.innerHTML = e.key;
};

/* var game = Game();
document.addEventListener('keydown', function(e) {})
*/

// Username and password
function myFunction() {
    var x, y;
    var text;
    username = /[0-9]/g;
    usernamewrong = /[a-zA-Z]/;

    x = document.getElementById("pass").value;
    y = document.getElementById('user').value;

    if (x.match(12345678) && y.match(username)) {
        text = "Input correct";
    }else {
        text = "Input not valid";
    }
    document.getElementById("para").innerHTML = text;
};
