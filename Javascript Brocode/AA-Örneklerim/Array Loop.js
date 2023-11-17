

let animals = ["Dog", "Cat", "Donkey", "Horse", "Elephant"];


for(let i = 0; i < animals.length; i++){
    console.log(animals[i]);
}
console.log("\n");

for(let i = animals.length - 1; i >= 0; i--){
    console.log(animals[i]);
}
console.log("\n");

for(let i of animals){
    console.log(i);
}