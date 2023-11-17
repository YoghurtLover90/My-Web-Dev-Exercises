

let animals = ["Dog", "Cat", "Zebra", "Donkey", "Horse", "Elephant"];
let trees = ["Spurce", "Oak", "Olive", "Birch"];
let flowers = ["Rose", "Tulip", "Violet", "Cactus"];

let categories = [animals, trees, flowers];

for(let category of categories){
    for(let list of category){
        console.log(list);
    }
    console.log("\n");
}

console.log("\n");
console.log(categories[1][2]);

console.log("\n");
console.log(categories[2][0]);

console.log("\n");
console.log(categories[0][4]);