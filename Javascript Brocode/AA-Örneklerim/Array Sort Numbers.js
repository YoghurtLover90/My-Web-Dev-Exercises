/* Sorting Numbers */

let numbers = [5, 10 , 25, 40, 35, 20];

numbers = numbers.sort(ascOrder);
numbers.forEach(print);
console.log("\n");
numbers = numbers.sort(descOrder);
numbers.forEach(print);

function descOrder(x, y){
    return y - x;
}

function ascOrder(x, y){
    return x - y;
}

function print(element){
    console.log(element);
}