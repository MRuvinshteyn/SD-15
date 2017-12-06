const fibonacci = function(n) {
    let a = 0;
    let b = 1;
    for (let i = 0; i < n; i++) {
        const temp = b;
        b = a + b;
        a = temp;
    }
    return a;
};

const gcd = function(a, b) {
    return b === 0 ? a : gcd(b, a % b);
};

const randomStudent = function(students) {
    return students[Math.floor(Math.random() * students.length)];
};

[...Array(10).keys()].map(fibonacci).map(n => console.log(n));

console.log("\n");

console.log(gcd(5678, 680));

console.log("\n");

console.log(randomStudent(["Khyber", "Michael"]));