



const myButton = document.getElementById("myButton");
const myDiv = document.getElementById("myDiv");


myButton.addEventListener("click", begin);

function begin(){

    let timerId = null;
    let degrees = 0;
    let x = 0;
    let y = 0;

    timerId = setInterval(frame, 5);
    timer2 = setInterval(frame2, 5);

    let key = false;
    
    function frame2(){

        if(x >= 250 || y >= 250 || key){
            key = true
            if(x <=0 || y <= 0){
                key = false;
            }
            x-=1;
            y-=1;
            myDiv.style.top= y + "px";
            myDiv.style.left= x + "px";
        }
        else{
            x+=1;
            y+=1;
            myDiv.style.top=y + "px";
            myDiv.style.left=x + "px";
        }
    }

    function frame(){
        if(degrees >= 360){
            degrees=0;
        }
        else{
            degrees+=1;
            myDiv.style.transform = "rotateY("+ degrees +"deg)";
            
        }
    }
}