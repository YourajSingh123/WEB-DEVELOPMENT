console.log("Document Object Model");

let cont = document.body.childNodes;
console.log(cont);

let cont1 = document.body.childNodes[1];
console.log(cont1);

let cont2 = document.body.childNodes[1].childNodes;
console.log(cont2);

console.log(cont1.firstChild);
console.log(cont1.lastChild);

console.log(cont1.firstElementChild);
console.log(cont1.firstElementChild.childNodes);
 
console.log(cont1.lastElementChild);
console.log(cont1.lastElementChild.style.backgroundColor = "yellow");
console.log(cont1.lastElementChild.style.color = "red");
console.log(cont1.lastElementChild.parentElement);

console.log(document.body.firstElementChild);
console.log(document.body.firstElementChild.childNodes);
console.log(document.body.firstElementChild.children);
console.log(document.body.firstElementChild.children[0]);
console.log(document.body.firstElementChild.children[2].nextElementSibling);
console.log(document.body.firstElementChild.children[3].previousElementSibling);
console.log(document.body.firstElementChild.children[3].previousSibling);

console.log(document.body.children[1]); 
console.log(document.body.children[1].rows);