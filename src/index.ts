/* let sales: number = 123_456_789;
let course: string = 'TypeScript';
let is_published: boolean = true; */ 

let sales = 123_456_789;
let course = 'TypeScript';
let is_published = true; 

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

function calculateTax(income: number, taxYear = 2022): number {
    if(taxYear < 2022)
    return income * 1.5;
    return income * 1.3;
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