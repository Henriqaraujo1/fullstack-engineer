var score1 = 8;
var score2 = 8;
var pass1 = 6;
var pass2 = 6;

var minPass = ((score1 >= score2) || (pass1 >= pass2));
var msg = 'Resit required: ' + minPass;

var el = document.getElementById('answer');
el.textContent = msg;