var greeting = 'Howdy ';
var name = 'Molly';
var message = ', plase check your order';

var welcome = greeting + name + message;

var sign = 'Montague House';
var total = sign.length;
var shipping = 7;
var subtotal = total * 5;
var granTotal = subtotal + shipping

var el = document.getElementById('greeting');
el.textContent = welcome;

var chSign = document.getElementById('userSign');
chSign.textContent = sign;

var chTotal = document.getElementById('tiles');
chTotal.textContent = total;

var chShipping = document.getElementById('shipping');
chShipping.textContent = '$' + shipping;

var chSubtotal = document.getElementById('subTotal');
chSubtotal.textContent = '$ ' + subtotal;

var chGranTotal = document.getElementById('grandTotal');
chGranTotal.textContent = '$' + granTotal;
