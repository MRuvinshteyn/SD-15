(function(i, s, o, g, r, a, m) {
    "use strict";
    /*
     * Michael Ruvinshteyn and Khyber Sen
     * HW 15 -- Sequential Progression
     * 2017-12-06
     */

    const fibonacci = function(n) {
        // sets the first two numbers to be used for further computation
        let a = 0;
        let b = 1;
        // loops until function reaches nth number in sequence
        for (let i = 0; i < n; i++) {
            const temp = b;
            b = a + b;
            a = temp;
        }
        return a;
    };

    const gcd = function(a, b) {
        // checks if second number is 0 -> return first number
        // otherwise return gcd of the second number and the remainder of f/s (a/b)
        while (b !== 0) {
            const temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    };

    const randomStudent = function(students) {
        // returns student at random index of a given list
        return students[Math.floor(Math.random() * students.length)];
    };

    Array.prototype.indices = function() {
        return [...this.keys()];
    };

    const testFibonacci = function(n) {
        console.log("Testing fibonacci:");
        Array(n).indices().map(
            n => console.log("The " + n + "th fibonacci number is: " + fibonacci(n))
        );
        console.log();
    };

    const testGcd = function(a, b) {
        console.log("Testing gcd:");
        console.log("gcd(" + a + ", " + b + ") = " + gcd(a, b));
        console.log();
    };

    const testRandomStudent = function(students, n) {
        console.log("Testing randomStudent:");
        console.log("Choosing " + n + " random students from [" + students.join(", ") + "]");
        for (let i = 0; i < n; i++) {
            console.log("Random student #" + i + ": " + randomStudent(students));
        }
        console.log();
    };

    testFibonacci(i);
    testGcd(5678, 680);
    console.log("We decided functions count as students, too.");
    testRandomStudent([
        "Khyber",
        "Sen",
        "Michael",
        "Ruvinshteyn",
        fibonacci,
        gcd,
        randomStudent,
    ], 10);

    alert("Done running tests!\nCheck the console for results.");
})(100);
