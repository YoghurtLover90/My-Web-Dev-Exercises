/* array.reduce tüm array değerlerini tek değere indirger */

let numbers = [5, 10 , 25, 40, 35, 20];
let total = numbers.reduce(totalier);

function totalier(total, value, index, array){
    total += value;
    if(index === array.length-1){
        return total/array.length;
    }
    else{
        return total;
    }
}

console.log(total);
