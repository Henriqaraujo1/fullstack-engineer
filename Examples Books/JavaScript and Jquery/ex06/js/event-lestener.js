//Declare function
function checkUsername() {
    //Get feedback element
    var elMsg = document.getElementById('feedback');
    //if username too short
    if(this.value.length < 5) {
        //set msg
        elMsg.textContent = 'Username must be 5 characters or more'
    } else {
        //Clear Msg
        elMsg.textContent = '';
    }
}

//get Username input
var elUsername = document.getElementById('username');
//When it loses focus call checkUsername();
elUsername.addEventListener('blur', checkUsername, false);