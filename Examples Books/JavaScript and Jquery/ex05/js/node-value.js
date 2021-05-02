var itemTwo = document.getElementById('two');

var elText = itemTwo.firstChild.nodeValue;

elText = elText.replace('Pine Nuts', 'kale'); //the text needs the equal the html

itemTwo.firstChild.nodeValue = elText;


