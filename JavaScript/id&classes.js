console.log("hello..");

let c = document.getElementsByClassName("box");
console.log(c);
c[2].style.backgroundColor = "yellow";

document.getElementById("orange").style.backgroundColor = "orange";

document.querySelector(".box").style.backgroundColor = "lightgreen";

// document.querySelectorAll(".box").forEach(e =>{
//     e.style.backgroundColor = "yellow";
// });

let e = document.getElementsByTagName("div");
console.log(e);

console.log(e[4].matches("#orange"));
console.log(e[4].closest("html"));
console.log(document.querySelector(".Container").contains(e[3]));