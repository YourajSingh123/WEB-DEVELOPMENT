console.log("Functions in JavaScript");

function hello(name){
    console.log("Hello " + name + " kaise ho?");
    console.log("aur " + name + " ghar pe sb thik hai");
    console.log(name + " ajj mausam bahut badhiya hai");
}

hello("yuvi");
hello("raunak");


function sum1(a, b){
    console.log(a+b);
}
sum1(4, 5);


function sum(k, l, m = 2){
    return k+l+m;
}

ans1 = sum(4, 5);
ans2 = sum(5, 8);
ans3 = sum(9, 6, 4);
console.log("the sum of the no is: " + ans1);
console.log("the sum of the no is: " + ans2);
console.log("the sum of the no is: " + ans3);