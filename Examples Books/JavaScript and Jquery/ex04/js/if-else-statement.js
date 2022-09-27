var pass = 50;
var score = 75;
var msg;

if (score >= pass) {
    msg = 'Congratulations, you passed';
} else {
    msg = 'Have another Go!';
}

var el = document.getElementById('answer');
el.textContent = msg;