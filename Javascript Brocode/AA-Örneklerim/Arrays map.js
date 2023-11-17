/* array.map = her array elementini bir callback fonksiyonunu uygular 
               ve yeni bir array oluşturur*/

    let numbers = [1, 2, 3, 4, 5, 6];
    let squareArray = numbers.map(squareMaker);
    squareArray.forEach(printer);

    function squareMaker(element){
        return Math.pow(element, 2);
    }
    
    function printer(element){
        console.log(element);
    }