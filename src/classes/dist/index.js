class Player {
    static description = 'Player In Our Game';

    #score=0; //with #, it means that score is only available inside the Player class, cannot be accessed outside
    numLives=10; //if you put like this outside of constructor, it is hardcoded
    constructor(first, last){
        this.first = first;
        this.last = last;
        /* this.score = 0;
        this.numLives = 10; */
    }

    get fullName(){
        return `${this.first} ${this.last}`
    }

    set fullName(newName){
        const [first, last] = newName.split(' ');
        this.first = first;
        this.last = last;
    }

    static randomPlayer(){
        return new Player('Andy', 'Sandberg')
    }

    get score (){
        return this.#score
    }

    set score(newScore){
        if(newScore<0){
            throw new Error('Score must be positive!')
        }
        this.#score = newScore
    }

    getScore(){
        return this.#score
    }

    updateScore(newScore){
       return this.#score = newScore;
    }

    taunt(){
        console.log('BOOYAH!')
    }
    loseLife(){
        this.numLives -= 1;
    }
}

//CONSTRUCTOR method will be authomatically called every single time 
//we instantiate a new instance of this class

const player1 = new Player('blue', 'steele')
console.log(player1.first)
player1.taunt()
console.log(player1.numLives);
player1.loseLife()
console.log(player1.numLives);
//player1.#score = 21 
//but if we want to give user access to score we could make a wrapper method
//like getScore()
player1.getScore() //we still cant change the score for that:
console.log(player1.getScore())
console.log(player1.updateScore(23))
console.log(player1)
console.log(player1.getScore())

console.log(player1.fullName) //notice: getter methods are not called with paranthesis
console.log(player1.score)
player1.score = 345
console.log(player1.score) //it wont be 345 because #score is private
//with a setter we can intercept an invalid number
//player1.score = -345 //throws the error
player1.score = 345 

/* const player2 = new Player('charlie', 'brown')
player2.taunt() */

console.log(player1.fullName);
player1.fullName = 'Amy Adams'
console.log(player1);
//console:
/* Player {numLives: 9, first: 'Amy', last: 'Adams', #score: 345}
first: "Amy"
last: "Adams"
numLives:9
#score: 345 */

//we treat setter and getter methods as properties: 
//player1.fullName = 'Amy Adams'

//static tells JS that that property or method exists on (beongs to) the 
//class itself and it s not going to exist each individual
//instance; so console:
//player1.description --> doesnt exist but
//Player.description (the class itself) -->console: 'Player In Our Game'


//inheritance 

class AdminPlayer extends Player {
    constructor(first, last, powers){
        super(first, last)
        this.powers = powers;
    }
    isAdmin = true;
}
//super 
//super comes into play when we have a class interiting or
//extending another class and it specifically comes into play
// when we have a constructor added on to this child class
//if both parent and child classes have contructors: we need suğper()
const admin =new AdminPlayer('admin', 'mcAdmin', ['delete', 'restore world']);
console.log(admin.taunt());
console.log(admin)
//console:
/* AdminPlayer {numLives: 10, first: 'admin', last: 'mcAdmin', isAdmin: true, #score: 0, …} 
first: "admin"
isAdmin: true
last:"mcAdmin"
numLives: 10
powers: Array(2)0:"delete" 1:"restore world"length:2
[[Prototype]]: Array(0)
#score:0
fullName:(...)
score:(...)*/

