console.log("let's learn about String");

let s1 = "Youraj";
console.log(s1);
console.log(s1[0]);
console.log(s1.length);

let s2 = "Singh";
console.log("His name is " + s1 + " and surname is " + s2);
console.log(`His name is ${s1} and surname is ${s2}`);  //template literals

// let s3 = "king is"back";
let s3 = "king is\"back";  //Escape sequence character
console.log(s3);

let s4 = "Raunak";
console.log(s4.length);
console.log(s4.toUpperCase());
console.log(s4.toLowerCase());
console.log(s4.slice(1, 5));  //here it doesn't include index 5 
console.log(s4.slice(2));
console.log(s4.replace("R", "K"));
console.log(s4.concat(s2, "Thakur", "Rajput"));

let s5 = " pagal"
console.log(s5.trim());
console.log(s5.charAt(2));
console.log(s5.indexOf("g"));
console.log(s5.indexOf("j"));
console.log(s5.startsWith("p"));
console.log(s5.endsWith("l"));