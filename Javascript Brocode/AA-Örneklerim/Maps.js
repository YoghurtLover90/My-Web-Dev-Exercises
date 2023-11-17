/* Maps = bir anahtara bir değer atayıp çift değeli nesneler oluşturma */

const Storage = new Map([
    ["Cars", 150],
    ["Trucks", 80],
    ["Planes", 20],
    ["Ships", 5]
]);

console.log(Storage.get("Cars"));
Storage.set("Boats", 60);
Storage.delete("Trucks");
console.log(Storage.has("Trucks"));
console.log(Storage.has("Boats"));
console.log(Storage.size);

Storage.forEach(function(value, key){
    console.log(key + " have " + value + " units.");
})

Storage.clear();

Storage.forEach(function(value, key){
    console.log(key + " have " + value + " units.");
})
