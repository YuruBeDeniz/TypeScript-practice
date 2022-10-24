//interfaces allow us to describe the shape of objects & only objects
/* type Pointt = {
    x: number,
    y: number
} */

//const pt: Pointt = {x: 5, y:7}

interface Pointt {
    x: number,
    y: number
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