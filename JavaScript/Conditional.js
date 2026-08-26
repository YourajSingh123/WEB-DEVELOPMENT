console.log("Conditional Statements");

// if-else Statement
let age = 45;
if (age > 18) {
    console.log("you can vote");
} else {
    console.log("you cannot vote");
}

// if-else ladder
let marks = 75;

if(marks >= 90){
    console.log("Grade A");
}else if(marks >= 70){
    console.log("Grade B");
}else if (marks >= 50){ 
    console.log("Grade C");
}else{
    console.log("Fail");
}


// Arithmetic Operator
let a = 30;
let b = 5;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a ** b);
console.log(a % b);

// Assignment Operator
let x = 10;
console.log(x += 5);
console.log(x -= 3);
console.log(x *= 5);
console.log(x /= 6);

// Comparison Operator
let m = 7;
let n = 5;
let o = "7"
console.log(m == n);
console.log(m != n);
console.log(m === o);
console.log(m !== o);
console.log(m <= n);
console.log(m >= n);

// Logical Operator
let a1 = 8;
let b1 = 6;
console.log(a1 == b1 && a1 >= b1);
console.log(a1 == b1 || a1 >= b1);
console.log(!true);