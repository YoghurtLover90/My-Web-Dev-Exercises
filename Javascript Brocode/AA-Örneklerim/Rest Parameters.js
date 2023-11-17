

let cities = ["Istanbul", "Ankara", "Malatya", "Muğla", "Kastamonu", "Edirne"];

console.log(adder(cities[0], cities[1], cities[2], cities[3], cities[4], "cities[5]"));

function adder(...towns){
    let addedNames = "";
    for(let townNames of towns){
        addedNames += " " + townNames;
    }
    return addedNames;
}