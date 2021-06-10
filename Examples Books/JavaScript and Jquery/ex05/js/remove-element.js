//the element to remove
var removeEl = document.getElementsByTagName('li')[3]

//its containing element
var containerEl = removeEl.parentNode;

//removing the element
containerEl.removeChild(removeEl);