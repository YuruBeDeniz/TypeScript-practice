/* let sales: number = 123_456_789;
let course: string = 'TypeScript';
let is_published: boolean = true; */ 

let sales = 123_456_789;
let course = 'TypeScript';
let is_published = true; 

//occasions where you need to use annotation
// if you dont annotate let foundMovie -> ts infer it as any
//and you can do, for ex, foundMoive() -> which you shouldnt
//any turns off all type-checking
const movies = ['Arrival', 'The Thnig', 'Aliens']
//let foundMovie; instead of this, we do:
let foundMovie: string;

for(let movie of movies){
    if(movie === 'Arrival'){
        foundMovie = 'Arrival';
    }
}


//tuples 
let user: [number, string] = [1, 'Deniz']

/* const small = 1;
const medium = 2;
const large = 3; */

//PascalCase
const enum Size {Small = 1, Medium, Large} 
let mySize: Size = Size.Medium
console.log(mySize)


//functions

/* function calculateTax(income: number): number {
    let x;
    if(income < 50_000)
    return income * 1.5;
    return income * 1.3;
} */

function greeting (person: string = 'stranger'){
    return `Hi ${person}!`
}

function square (num: number): string{
    return (num * num).toString()
};

square(3)

//when hover over rando: function rando(num: number): string | number   
function rando(num: number){
    if(Math.random() < 0.5){
        return num.toString();
    }
    return num;
};   

const add = (x: number, y: number): number => {
    return x + y;
};

//here we dont need to annotate string to color because
//ts looks at the array and infer that color is string
const colors = ['red', 'green', 'brown']
colors.map(color => color.toUpperCase())

//in JS although square('deniz') doesnt give an error,
// the result will be NaN
/* function square (num){
  return num * num
}
 square('deniz')  */

function calculateTax(income: number, taxYear = 2022): number {
    if(taxYear < 2022)
    return income * 1.5;
    return income * 1.3;
}

//void type
//undefined is returned from a function if you dont return anything

//this function doesnt return anything, so ts infers return value as void
function printTwice (msg: string){
    console.log(msg)
    console.log(msg)
}

//returns number
function secondsInDay() {
    return 24 * 60 * 60;
}

//never type: a return type for functions
//indicates that a function should never (have a chance to) return anything
function makeError(msg: string): never{
    return undefined;
    throw new Error(msg);
}

//a function that never stops - that loops forever
function gameLoop(): never{
    while(true){ 
        console.log('game loop running')
    }
}


//or if you want to specify the function isnt suppossed to return anything:
//or if i want always return nothing
function printingTwice (msg: string): void{
    console.log(msg)
    console.log(msg)
}

calculateTax(10_000)

//Objects:
/* let employee: {
    readonly id: number,
    name?: string,
    retire: (date: Date) => void
} = { 
    id: 1,
    name: 'Deniz',
    retire(date: Date){
        console.log(date)
    }
    }; */
/* employee.name = 'Deniz'
employee.id = 0; */

//Type alias

//PascalCase
type Employee = {
    readonly id: number,
    name?: string,
    retire: (date: Date) => void
}

let employee: Employee = { 
    id: 1,
    name: 'Deniz',
    retire(date: Date){
        console.log(date)
    }
    };


//union types

    //we will annotate a return type: number
    // in this function, we dont know if the weight is a number
    // or a string, if we type weight. we will see methods
    // common for strings and numbers
    //this is where we use a technique called narrowing

function kgToLbs(weight: number | string): number {
    if(typeof weight === 'number'){
        return weight * 2.2
    } else {
        return parseInt(weight) * 2.2;
    }   
}

kgToLbs(10);
kgToLbs('10kg');

//let weight: number | string

//Intersection
type Draggable = {
    drag: () => void
}

type Resizable = {
    resize: () => void
}

type UIWidget = Draggable & Resizable;

//declare a textbox which is a UIWidget
//to initialize this object, we need to implement all
//draggable and resizable objects
//so we need to implement the drag and resize methods

let textBox: UIWidget = {
    drag: () => {},
    resize: () => {}
}

//literal types:
//literal (exact, specific)

//let quantity: 50 | 100 = 51;

//or, instead of hardcoding:
type Quantity = 50 | 100;
let quantity: Quantity = 100;

type Metric = 'cm' | 'inch';

//nullable types
function greet(name: string | null | undefined){
    if(name)
    console.log(name.toUpperCase);
    else
    console.log('Hola!')
}
greet(null);
greet(undefined)

//optional chaning
//let's define a type alias

type Customer = {
    birthday?: Date
}
//define a function getting a customer from database
//return Customer or null(in case there is no customer with the given id)
//if id equal 0 return null otherwise return a customer object with his birthday
function getCustomer(id: number): Customer | null | undefined {
    return id === 0 ? null : { birthday: new Date() }
}

/* let customer = getCustomer(0)
console.log(customer.birthday)
//here we get an error because Object (customer) is possibly 'null'. 
//to solve this:
if(customer !== null && customer !== undefined)
    console.log(customer.birthday) */

//there is a simple way for this if statement:
//let customer = getCustomer(0)    
//console.log(customer?.birthday)
//This piece of code gets executed only if we have a customer
//that is not null or undefined
//terminal: undefined
let customer = getCustomer(1) //console: 2022-08-27T13:15:04.928Z

//optional property access operator
//for this one add ? to birthday key in type alias
console.log(customer?.birthday?.getFullYear())

//optional element access operator
//useful when dealing with arrays
//if(customers !== null && customers !== undefined) or
//customers?.[0]


//optional call operator
//let log: any = (message: string) => console.log(message); or
let log: any = null;
log?.('a');

//this piece of code will get executed only if log is referencing
//to an actual function 
//otherwise, will get undefined


