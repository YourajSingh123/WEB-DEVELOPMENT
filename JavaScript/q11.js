console.log("Factorial of a number");

let a = 5;
const factorial = (n)=>{
    if(n === 0 || n === 1){
        return 1;
    }
    return n*factorial(n-1);
}

console.log(factorial(a));