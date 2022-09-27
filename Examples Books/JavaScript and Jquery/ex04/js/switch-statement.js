var msg;
var level = 2;

switch(level) {
    case 1:
        msg = 'Good luck on the first Test';
        break;
    case 2:
        msg = 'Second of three - Keep Going';
        break;
    case 3:
        msg = 'Final round, almost there';
        break;
    default:
        msg = 'Good luck!';
        break;
}

var el = document.getElementById('answer');
el.textContent = msg;