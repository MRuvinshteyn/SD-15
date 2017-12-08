//Michael Ruvinshteyn && Khyber Sen
//SoftDev1  pd7
//HW 15 -- Sequential Progression
//2017 - 12 - 07

var fibonacci = function(n) {
	let a = 0;
	let b = 1;
	for (let i = 0; i < n; i++) {
		const temp = b;
		b = a + b;
		a = temp;
	}
	return a;
};

var gcd = function(a,b) {
	if (b == 0){
		return a;
	};
	return gcd(b, a % b);
};

var list = ["Michael","Khyber","Ruvinshteyn","Sen"];
var random_student_selector = function() {
	return list[Math.floor(Math.random() * list.length)];
};

function fibonacciIn() {
	var elem = document.getElementById('fibIn').value;
    var para = document.createElement('p');
    var result = document.createTextNode(fibonacci(elem));
    para.appendChild(result);
    document.getElementById('fib').appendChild(para);
	console.log("The " + elem + "th fibonacci number: " + fibonacci(elem));
};

function gcdIn() {
    var elem1 = document.getElementById('gcd1').value;
    var elem2 = document.getElementById('gcd2').value;
    var para = document.createElement('p');
    var result = document.createTextNode(gcd(elem1,elem2));
    para.appendChild(result);
    document.getElementById('gcd').appendChild(para);
    console.log("gcd of " + elem1 + " and " + elem2 + ": " + gcd(elem1,elem2));
}

function random_studentIn() {
    var para = document.createElement('p');
    var ret = random_student_selector();
    var result = document.createTextNode(ret);
    para.appendChild(result);
    document.getElementById('random_student').appendChild(para);
    console.log("Random student from given list: " + ret);
}