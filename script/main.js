// interacting with the DOM

//getElementById
//document.getElementById('text');

//getElementByClassName
// var titles = document.getElementsByClassName('main_title');
// var main = document.querySelector('.inner_card');
//main.textContent = ' Valencia and Bilbao!';
//console.log(main);
var paraph = (document.getElementsByTagName('p').innerHTML = 'Get to Know');
function greet(name, favColor) {
	console.log('Hello my name is ' + name + ' and my favorite color is ' + favColor + '.');
}

greet('Fabio', 'blue');
