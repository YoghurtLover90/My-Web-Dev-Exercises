// class = a blueprint for creating objects
// define what properties and methods they have
// use a constructor for unique properties



class Player{
    score = 0;
    name ="";
    pause(){
        console.log("Paused");
    }
    exit(){
        console.log("You exited the game");
    }
    
    constructor(score, name){
        this.score=score;
        this.name=name;
    }
}

const player1= new Player(5,"Yoghurt");

player1.score += 1;

console.log(player1.score);
console.log(player1.name);

player1.pause();