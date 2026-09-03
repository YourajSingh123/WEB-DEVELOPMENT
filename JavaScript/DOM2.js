console.log(document.querySelector(".box"));
console.log(document.querySelector(".box").innerHTML);
console.log(document.querySelector(".container").innerHTML);

console.log(document.querySelector(".box").innerText);
console.log(document.querySelector(".container").innerText);

console.log(document.querySelector(".box").outerHTML);
console.log(document.querySelector(".container").outerHTML);

console.log(document.querySelector(".box").tagName);
console.log(document.querySelector(".container").tagName);
console.log(document.querySelector(".box").nodeName);
console.log(document.querySelector(".container").nodeName);

console.log(document.querySelector(".box").textContent);

console.log(document.querySelector(".box").hidden);
// console.log(document.querySelector(".box1").hidden = true);

console.log(document.querySelector(".box1").innerHTML = "kaise ho!!");

//Attributes Methods
console.log(document.querySelector(".box").hasAttribute("id"));
console.log(document.querySelector(".box").getAttribute("id"));
console.log(document.querySelector(".box").setAttribute("id", "2"));
console.log(document.querySelector(".box").attributes);
console.log(document.querySelector(".box").removeAttribute("id"));

// console.log(document.designMode = "on");
// data attributes
console.log(document.querySelector(".box").dataset);

//Insertion Attributes
// let div = document.createElement("div");
// div.innerHTML = "I have been inserted <b>by Yuvii</b>";
// div.setAttribute("class", "jio");
// // document.querySelector(".container").append(div);
// // document.querySelector(".container").before(div);
// document.querySelector(".container").prepend(div);

let cont = document.querySelector(".container");
console.log(cont.insertAdjacentHTML("afterend", "<b>Ekdum badhiya marde</b>"));

//Remove
// console.log(document.querySelector(".box").remove());

//className and classList
console.log(document.querySelector(".container").classList);
console.log(document.querySelector(".container").className);
console.log(document.querySelector(".container").classList.add("YUVII"));
console.log(document.querySelector(".container").classList.remove("yellow"));
console.log(document.querySelector(".container").classList.add("yellow"));
console.log(document.querySelector(".container").classList.toggle("yellow"));
console.log(document.querySelector(".container").classList.toggle("yellow"));