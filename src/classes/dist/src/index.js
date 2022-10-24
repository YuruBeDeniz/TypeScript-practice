"use strict";
// class Player {
//     readonly first: string;
//     readonly last: string;
//     private score = 0; //let TS infer the type
//     //you can also use #score = 0
//     constructor(first: string, last: string){
//         this.first = first;
//         this.last = last;
//     }
//     private secretMethod(): void{
//         console.log('secrect method')
//     }
// }
// const elton = new Player('Elton', 'Steele');
// console.log(elton)
//public is about visibility, readonly means you cannot change it
//elton.secretMethod();
//shortcut to above class
class Player {
    constructor(first, last, _score //add _ to make it accessible only in the class
    ) {
        this.first = first;
        this.last = last;
        this._score = _score;
    }
    secretMethod() {
        console.log('secrect method');
    }
    get fullName() {
        return `${this.first} ${this.last}`;
    }
    get score() {
        return this._score; //here we make (private) score publicly visible
    }
    set score(newScore) {
        if (newScore < 0) {
            throw new Error('Score cannot be negative');
        }
        this._score = newScore;
    }
}
const elton = new Player('Elton', 'Steele', 100);
elton.fullName;
elton.score;
//TS doesnt want you to have any return type annotations for setters
class SuperPlayer extends Player {
    constructor() {
        super(...arguments);
        this.isAdmin = true;
    }
    maxScore() {
        this._score = 999999; //Property '_score' is private and only accessible within class 'Player'.
        //so if we change private to protected we can access anything from the parent class
    }
}
