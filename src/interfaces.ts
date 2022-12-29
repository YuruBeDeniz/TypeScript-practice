//interfaces allow us to describe the shape of objects & only objects
/* type Pointt = {
    x: number,
    y: number
} */

//const pt: Pointt = {x: 5, y:7}

interface Pointt {
    x: number;
    y: number;
}

const pt: Pointt = {x: 5, y:7}

interface Person {
    readonly id: number,
    first: string,
    last: string,
    nickname?: string,
    sayHi: () => string, //or sayHi(): string
}

const thomas: Person = { 
    first: 'Thomas', 
    last: 'Hardy', 
    id: 23456,
    sayHi: () => 'Hello'
}

interface Product {
    name: string,
    price: number,
    applyDiscount(discount: number): number,
}

const shoes: Product = {
    name: 'blue shoes',
    price: 100,
    applyDiscount(amount: number){
        const newPrice = this.price * (1-amount);
        this.price = newPrice;
        return newPrice;
    }
}

console.log(shoes.applyDiscount(0.4))
//to see the log in the terminal => tsc interfaces.ts
//then => node interfaces.js

//you can add more properties to an interface:
// eg. you use an interface from a library and instead of 
//manipulating it, you just want to add more properties:

//an interface from a library:
interface Dog {
    name: string;
    age: number;
}

//you want to add new properties to this interface:
interface Dog {
    breed: string;
    bark(): string;
}

const kopus: Dog = {
    name: 'Kopus',
    age: 2,
    breed: 'kangal',
    bark() {
        return 'Hav hav'
    } 
}

interface VetDog {
    vaccinated: boolean; 
}


/* --------------------ADD ON -------------------- */
//now i want another type of dog: service dog which will have
//all the properties of dog interface but with more feature

interface ServiceDog extends Dog, VetDog {
    job: 'drug sniffer' | 'guide' | 'bomb sniffer';
}

const chewy: ServiceDog = {
    name: 'Chewy',
    age: 1,
    breed: 'kangal',
    bark() {
        return 'Hav hav hav'
    },
    job: 'guide',
    vaccinated: true,
}