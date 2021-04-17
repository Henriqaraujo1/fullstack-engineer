var score = 75;
var msg = '';

function congratulations() {
    msg += 'Congratulations! ';
}

if (score >= 50) {
    congratulations();
    msg += 'Proceed to the next round.';
}

var el = document.getElementById('answer')
el.textContent = msg;