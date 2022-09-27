function getTarget(e) {
    if(!e) {
        e = window.event;
    }
    return e.target || e.srcElement;
};

function itemDone(e) {                     //5 Declare Funtion                 
    //Remove item from the list
    var target, elParent, elGrandparent;   //6 Declare Variables
    target = getTarget(e);                 //7 get the item clicked link
    elParent = target.parentNode;          // 8 Get its list item 
    elGrandparent = target.parentNode.parentNode; //9 Get its list
    elGrandparent.removeChild(elParent);          //10 Remove list item from list

    //Prevent the link from taking tou elsewhere
    if(e.preventDefault) {                 //11 if preventDefault() works
        e.preventDefault();                //12 Use preventDefault()
    } else {                               //OtherWise 
        e.returnValue = false;             //13 Use old IE version
    }
}

//set up event listener to call itemDone() on click
var el = document.getElementById('shoppingList'); //1 Get shopping list
if(el.addEventListener) {                         //2 if event listener work  
    el.addEventListener('click', function(e) {    //3 Add listener work
        itemDone(e);                              //It calls itemDone()
    }, false);                                    //Use bubbling phase for flow  
} else {                                          //OtherWise          
    el.attachEvent('onclick', function(e) {       // 4 Use old IE model: onclick
        itemDone(e);                              // Call itemDone()   
    });
}