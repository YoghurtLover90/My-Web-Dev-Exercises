/* array.filter = her array elementini bir callback fonksiyonunu uygular 
                  ve bir şartla test ederek yeni bir array oluşturur*/

    let ages = [18, 16, 9, 4, 21, 48];
    let adults = ages.filter(ageChecker);

    adults.forEach(print);

    function ageChecker(age){
        if(age >= 18){
            return age;
            console.log("debug");
        }
    }

    function print(element){
        console.log(element);
    }