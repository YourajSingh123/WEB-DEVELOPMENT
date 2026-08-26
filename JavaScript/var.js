console.log("let's learn about javascripts variables");

var a = 5;
a = a+1;
var $ = 7;
var _c = "Yuvraj";
// var 5x = 9;  not allowed

console.log(a+$);
console.log(typeof a, typeof $, typeof _c);

let x = 9;
{
    let x = 15;
    console.log(x);
}
console.log(x);

const y = 8;
// y = y+1;   //not allowed because y is constant
console.log(y); 

// Primitive Data Types
let p = "yuvii bhai"
let q = 19;
let r = 8.76;
const s = true;
let t = undefined;
let u = null;

console.log(p, q, r, s, t, u);
console.log(typeof p, typeof q, typeof r, typeof s, typeof t, typeof u);

// Objects
let obj = {
    name: "Rahul",
    age: 20,
    city: "Bihar"
};

console.log(obj); 
obj.course = "B.Tech";
console.log(obj);