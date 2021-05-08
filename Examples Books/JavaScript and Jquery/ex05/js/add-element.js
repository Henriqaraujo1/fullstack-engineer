// Create a new element and sotre in variable
var newEl = document.createElement('li'); 

//Create text node and store in a variable
var newText = document.createTextNode('quinoa')

//attach the new text node to the new element
newEl.appendChild(newText);

//fing the position where the new elemente should be added
var position = document.getElementsByTagName('ul')[0];

//insert the new element into its position
position.appendChild(newEl)