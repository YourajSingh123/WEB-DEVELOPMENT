let random = Math.random();

let a = prompt("enter 1st number");
let b = prompt("enter 2nd number");
let c = prompt("enter operation");

let obj = {
    "+" : "-",
    "*" : "+",
    "-" : "/",
    "/" : "**"
}

if(random < 0.1){
    console.log(`The result is ${a} ${c} ${b}`)
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}else{
    c = obj[c];
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`) 
}