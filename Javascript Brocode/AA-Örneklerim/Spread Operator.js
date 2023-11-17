

let numbers = [1,2,3,4,5,6,7,8,9,30];

let max = Math.max(...numbers);
console.log(max);
console.log("\n");

let name = "Mustafa Ismail Alkan";
console.log(...name);
console.log("\n");

let sinif1 = ["Ahmet", "Ali", "Mustafa", "Ateş"];
let sinif2 = ["Aras", "Ömer", "Mansur", "Yusuf"];

sinif1.push(...sinif2);
console.log(sinif1);