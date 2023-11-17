

//Bir fonksiyonu başka bir fonksiyona parametre olarak göndermek

function consoleResult(output){
    console.log(output);
}

function DOMResult(output){
    document.getElementById("label1").innerHTML = output;
}

function subtractor(a, b, CallbackFun){
    let result = a - b;
    CallbackFun(result);
}

subtractor(123, 47, consoleResult);
subtractor(93, 47, DOMResult);


