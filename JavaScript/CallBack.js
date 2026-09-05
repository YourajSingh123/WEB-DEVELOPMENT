console.log("Yuvii is hacker");
console.log("Raunak is hecker");

setTimeout(() => {
    console.log("hello.....")
}, 2000);

setTimeout(() => {
    console.log("bhai.....")
}, 1000);

console.log("Khel Khatam");

//CALLBACK
const fun = () => {
  console.log("Nothing");
}

const callback = (arg, fun) => {
  console.log(arg);
  fun();
}


const loadScript = (src, callback) => {
  let sc = document.createElement("script");
  sc.src = src;
  sc.onload = callback("Yuvii", fun);
  document.head.append(sc);
}

loadScript("https://www.linkedin.com/in/youraj-singh-584231360/", callback);