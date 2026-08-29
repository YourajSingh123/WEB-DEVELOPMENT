let a = [1, 2, 3, 4, 5];
let b = [];

// for (let i = 0; i < 3; i++) {
//     const element = a[3];
//     console.log(element);
// }


//foeEach
a.forEach((value, index, arr)=>{
    console.log(value, index, arr);
});

for (let i = 0; i < a.length; i++) {
    const element = a[i];
    b.push(element ** 2);
}
console.log(b);

//map
let b1 = a.map((e, idx, arr)=>{
    return e ** 2;       
});
console.log(b1);

//filter
const greaterThan10 = (e)=>{
    if(e >= 10){
        return true;
    }
    return false;
}
console.log(b1.filter(greaterThan10));

//reduce
let c = [1, 2, 3, 4, 5]
const add = (a, b)=>{
    return a*b;
}

console.log(c.reduce(add));

//from
console.log(Array.from("youraj"));