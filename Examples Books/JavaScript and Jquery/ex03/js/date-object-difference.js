var today = new Date();
var year = today.getFullYear();
var est = new Date('Apr 16, 1996 15:45:55');
var difference = today.getTime() - est.getTime();
difference = (difference / 31556900000);

var elMsg = document.getElementById('message');
elMsg.innerHTML = Math.floor(difference) + ' Years of online travel device';

var copy = document.getElementById('footer');
copy.innerHTML = '<p>Coyright &copy;' + year + '</p>';
