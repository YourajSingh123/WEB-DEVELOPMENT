console.log("Loops in JavaScript");
 
// for loop -- Even Number
for(let i = 1; i <= 10; i++){
    if(i % 2 == 0){
        console.log(i);
    }   
}

// for in loop
let obj = {
    "name" : "Yuvraj",
    "age" : 19,
    "course" : "B.Tech",
    "Specialization" : "AI"
}

for (const key in obj) {
    const element = obj[key];
    console.log(key, element);
}

// for of loop
const arr = [10, 98, 51];

for (const arr1 of arr) {
    console.log(arr1);
}

// while loop
let x = 1;
while(x < 9){
    if(x % 2 ==0){
        console.log(x);
    }
    x++;
} 

// do-while loop
let i = 1;
do {
    console.log(i);
    i++;
} while (i <= 5);