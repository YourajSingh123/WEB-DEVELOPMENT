console.log("let's learn about Promises");

let prom1 = new Promise((resolve, reject) =>{
    let a = Math.random();
    if(a < 0.5){
        reject("System is not working please wait...");
    }else{
        setTimeout(() => {
            console.log("Yes I am Done");
            resolve("Yuvii");
        }, 3000);
    }
 })

prom1.then((a) => {
  console.log(a);
}).catch((err) => {
 console.log(err); 
})

let prom2 = new Promise((resolve, reject) =>{
    let a = Math.random();
    if(a < 0.5){
        reject("System is not working please wait.. 2");
    }else{
        setTimeout(() => {
            console.log("Yes I am Done 2");
            resolve("Yuvii 2");
        }, 1000);
    }
 })

// let p3 = Promise.all([prom1, prom2]);
// p3.then((a) => {
//   console.log(a);
// }).catch((err) => {
//  console.log(err); 
// })

// let p3 = Promise.allSettled([prom1, prom2]);
// p3.then((a) => {
//   console.log(a);
// }).catch((err) => {
//  console.log(err); 
// });

let p3 = Promise.race([prom1, prom2]);
p3.then((a) => {
  console.log(a);
}).catch((err) => {
 console.log(err); 
});