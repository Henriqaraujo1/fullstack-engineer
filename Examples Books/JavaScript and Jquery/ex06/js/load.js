function setup() {                                    //Declare function
    var textInput;                                   //create variable
    textInput = document.getElementById('username'); //Get username Input
    textInput.focus()                                //Give username focus    
}

window.addEventListener('load', setup, false);      //When page loaded call setup()