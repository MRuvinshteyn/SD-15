//Michael Ruvinshteyn && Khyber Sen
//SoftDev1 pd7
//HW15 -- Sequential Progression
//2017 - 12 - 06

const fibonacci = function(n) {
    //sets the first two numbers to be used for further computation
    let a = 0;
    let b = 1;
    //loops until function reaches nth number in sequence
    for (let i = 0; i < n; i++) {
        const temp = b;
        b = a + b;
        a = temp;
    }
    return a;
};

const gcd = function(a, b) {
    //checks if second number is 0 -> return first number
    //otherwise return gcd of the second number and the remainder of f/s (a/b)
    return b === 0 ? a : gcd(b, a % b);
};

const randomStudent = function(students) {
    //returns student at random index of a given list
    return students[Math.floor(Math.random() * students.length)];
};

[...Array(10).keys()].map(fibonacci).map(n => console.log(n));

console.log("\n");

console.log(gcd(5678, 680));

console.log("\n");

console.log(randomStudent(["Khyber", "Michael"]));
