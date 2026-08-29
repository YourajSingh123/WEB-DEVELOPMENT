console.log("let's learn about Arrays");

let arr = [1, 2, 3, 4, 5];
console.log(arr, typeof arr);
console.log(arr.length);
console.log(arr[0]);
console.log(arr[3]);

// arr[0] = 10;
// console.log(arr);
// console.log(arr[0]);

console.log(arr.toString());
console.log(arr.join(" & "));

console.log(arr.pop());
console.log(arr.push(7));
console.log(arr);

console.log(arr.shift());
console.log(arr.unshift(10));
console.log(arr);

// delete arr[2];
// console.log(arr);

let a = [90, 8, 6, 76];
console.log(arr.concat(a));
console.log(a.sort());

let num = [1, 2, 3, 4, 5];
console.log(num.splice(2, 2, 33, 44));
console.log(num);

console.log(num.slice(2, 4));
console.log(a.reverse());