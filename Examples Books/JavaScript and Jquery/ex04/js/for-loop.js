var scores = [24,32,17,];

var arryaLenght = scores.length;
var roundNumber = 0;
var msg = '';
var i;

//Loop through the items in the array
for (i = 0; i<arryaLenght; i++) {
    roundNumber = (i + 1);

    msg += 'Round ' + roundNumber + ': ';
    msg += scores[i] + '<br />';
}

document.getElementById('answer').innerHTML = msg;