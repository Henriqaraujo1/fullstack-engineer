var pass = 50;
var score = 90;

//Check if the user has passed
var hasPassed = score >= pass;

//write the message
var el = document.getElementById('answer');
el.textContent = 'Level Passed: ' + hasPassed;