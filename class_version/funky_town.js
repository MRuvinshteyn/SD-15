//Michael Ruvinshteyn && Khyber Sen
//SoftDev1  pd7
//HW 15 -- Sequential Progression
//2017 - 12 - 07

var fibonacci = function(n) {
    //two variables used for the first two numbers, 0 and 1
	let a = 0;
	let b = 1;
	for (let i = 0; i < n; i++) {
		const temp = b;
		b = a + b;
        //modify a to the new fibonacci number
		a = temp;
	}
    //return the final fibonacci number
	return a;
};

var gcd = function(a,b) {
    //if the second number is equal to 0, return the first number
	if (b == 0){
		return a;
	};
    
    //otherwise, take the remainder of the the two numbers, and test gcd with that and the second number
	return gcd(b, a % b);
};

var list = ["Michael","Khyber","Ruvinshteyn","Sen"];
var random_student_selector = function() {
    //return a string from a random index of the list
	return list[Math.floor(Math.random() * list.length)];
};

//Method for next three functions:
//1. Take the element from the inputs
//2. Create a new paragraph to print the answer in
//3. Take the result of the function with the given input
//4. Append the result to the paragraph
//5. Place the paragraph into the page

function fibonacciIn() {
	var elem = document.getElementById('fibIn').value;
    var para = document.createElement('p');
    var result = document.createTextNode("The " + elem + "th fibonacci number is " + fibonacci(elem));
    para.appendChild(result);
    document.getElementById('fib').appendChild(para);
	console.log(elem + " ==> " + fibonacci(elem));
};

function gcdIn() {
    var elem1 = document.getElementById('gcd1').value;
    var elem2 = document.getElementById('gcd2').value;
    var para = document.createElement('p');
    var result = document.createTextNode("GCD of " + elem1 + " and " + elem2 + ": " + gcd(elem1,elem2));
    para.appendChild(result);
    document.getElementById('gcd').appendChild(para);
    console.log(elem1 + ", " + elem2 + " ==> " + gcd(elem1,elem2));
}

function random_studentIn() {
    var para = document.createElement('p');
    var ret = random_student_selector();
    var result = document.createTextNode("Random student from given list: " + ret);
    para.appendChild(result);
    document.getElementById('random_student').appendChild(para);
    console.log("Random student from given list: " + ret);
}