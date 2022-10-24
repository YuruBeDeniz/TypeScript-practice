const dog = {
    name: 'Elton',
    breed: 'Australian Shepherd',
    age: 0.5
}

function printName (person: {first: string, last: string}): void{
    console.log(`${person.first} ${person.last}`)
}

printName({first: 'Thomas', last: 'Jenkins'})

let coordinate: {x: number, y: number} = { x: 34, y: 2 }

function randomCoordinate(): { x: number, y: number } {
    return {x: Math.random(), y: Math.random()}
}

//what happens when we add age:
//printName({first:'Mick', last:'Jagger', age: 342}) //we get an error
const singer = {first:'Mick', last:'Jagger', age: 342}; //but after assignin to a variable, we dont get an error
printName(singer) /* const singer: {
                     first: string;
                     last: string;
                     age: number;
} */


//type Alias:

// let coordinates: {x: number, y: number} = { x: 34, y: 2 }

// function randomCoordinates(): { x: number, y: number } {
//     return {x: Math.random(), y: Math.random()}
// }

// function doublePoint(point: {x: number, y: number}): { x: number, y: number } {
//     return {x: point.x * 2, y: point.y * 2}
// }

//instead of writing a type over and over create a type:
type Point = {
    x: number,
    y: number
}

function randomCoordinates(): Point {
     return {x: Math.random(), y: Math.random()}
}

function doublePoint(point: Point): Point{
    return {x: point.x * 2, y: point.y * 2}
}

/* {
    title: 'smells like teenspirit',
    artist: 'Nirvana',
    numStreams: 12334,
    credits: {
        producer: 'dklsn',
        writer: 'curt cobain'
    }
} */

// function calculatePayout (song: {title: string, artist: string, numStreams: number, credits: {producer:string, writer: string}}){

// }

type Song = {
    title: string, 
    artist: string, 
    numStreams: number, 
    credits: {
        producer:string, 
        writer: string
}}

function calculatePayout (song: Song): number {
    return song.numStreams * 0.0033
}

function printSong (song: Song): void {
    console.log(`${song.title} - ${song.artist}`)
}

const mySong: Song = {
    title: 'smells like teenspirit',
    artist: 'Nirvana',
    numStreams: 12334,
    credits: {
        producer: 'dklsn',
        writer: 'curt cobain'
 }}

 calculatePayout(mySong);
 printSong(mySong)


type User = {
    readonly id: number,
    username: string,
}

const userr: User = {
    id: 1245,
    username: 'deli'
}

//user.id = 12345 //--> this throws error

type Circle = {
    radius: number
}

type Colorful = {
    color: string
}

type ColorfulCircle = Circle & Colorful;

const happyFace: ColorfulCircle = {
    radius: 5,
    color: 'yellow'
};