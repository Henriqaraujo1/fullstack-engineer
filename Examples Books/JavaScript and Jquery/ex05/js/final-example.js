//Create elements
var firstEl = document.createElement('li');
var lastEl = document.createElement('li');
//Insert the node text
var firstText = document.createTextNode('kale');
var lastText = document.createTextNode('rice');

//to assign the node text in the element
firstEl.appendChild(firstText);
lastEl.appendChild(lastText);
//find the position to insert the new element
var position = document.getElementsByTagName('ul')[0];
//insert the elements
position.prepend(firstEl);
position.appendChild(lastEl);

//Change the attribute
var chgAttribute = document.querySelectorAll('li')

if (chgAttribute.length > 0) {
    for (var i=0; i< chgAttribute.length; i++) {
        chgAttribute[i].className = 'cool';
    }
}

var heading = document.querySelector('h2')
var headingText = heading.firstChild.nodeValue;
var totalItems = chgAttribute.length
heading.innerHTML = headingText + '<span>' + totalItems + '</span>';


