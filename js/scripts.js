// plik scripts.js

var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];

var allNames = femaleNames.concat(maleNames);

console.log(allNames);

function myFunction() {
	var newName = 'Marian';
		if (allNames.indexOf(newName) === -1) {
		var x = allNames.push(newName)
		console.log(x)
		console.log(allNames)
		} else {
		console.log ('Takie imię już się pojawiło')
		}
}

myFunction();