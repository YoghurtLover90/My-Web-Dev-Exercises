//array.forEach = her array değerini bir callback fonksiyonun içine sokar


let isimler = ["MUSTAFA", "ALİ", "ÖMER"];


function lowerCasing(element, index, array){
    array[index] = element.substring(0,1) + element.toLowerCase().substring(1);
}

function print(element){
    console.log(element);
}

isimler.forEach(lowerCasing);
isimler.forEach(print);

//isimler[0] = isimler[0].substring(0,1) + isimler[0].toLowerCase().substring(1); 
//console.log(isimler[0]);
