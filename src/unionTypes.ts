let age: string | number = 21;
age = 23;
age = '24'; 

type Pointtt = {
    x: number,
    y: number
}

type Loc= {
    lat: number,
    long: number,
}

let coordinates: Pointt | Loc = {x: 1, y: 34};
coordinates = {lat: 4, long: 80}

function printAge(age: number | string): void {
    console.log(`You are ${age} years old`)
}

//type narrowing :

function calculateTax(price: number | string, tax: number) {
    if(typeof price === 'string'{
       price = price.replace('$', '')
       return parseFloat(price) * tax
    } return price * tax;
    //return price * tax //this doesnt work as price can be both string or number
} 

const stuff: (number | string)[] = [1,2,3,4, 'sdkna']
const stuff2: number[] | string[] = [] 
// stuff2 is different than stuff because stuff2 ya sadece number
//ya da sadece string kabul ediyor. stuff ise ikisini de 

const coordss: (Pointtt | Loc)[] = [];
coordss.push({lat:3, long:3});
coordss.push({x:4, y:5})

//literal types

let zero: 0 = 0;
//it is not a a number, it is 0

//combine types and literals:
