var dog = {
    name: 'Elton',
    breed: 'Australian Shepherd',
    age: 0.5
};
function printName(person) {
    console.log("".concat(person.first, " ").concat(person.last));
}
printName({ first: 'Thomas', last: 'Jenkins' });
var coordinate = { x: 34, y: 2 };
function randomCoordinate() {
    return { x: Math.random(), y: Math.random() };
}
//what happens when we add age:
printName({ first: 'Mick', last: 'Jagger', age: 342 }); //we get an error
var singer = { first: 'Mick', last: 'Jagger', age: 342 }; //but after assignin to a variable, we dont get an error
printName(singer); /* const singer: {
                     first: string;
                     last: string;
                     age: number;
} */
function randomCoordinates() {
    return { x: Math.random(), y: Math.random() };
}
function doublePoint(point) {
    return { x: point.x * 2, y: point.y * 2 };
}
function calculatePayout(song) {
    return song.numStreams * 0.0033;
}
function printSong(song) {
    console.log("".concat(song.title, " - ").concat(song.artist));
}
var mySong = {
    title: 'smells like teenspirit',
    artist: 'Nirvana',
    numStreams: 12334,
    credits: {
        producer: 'dklsn',
        writer: 'curt cobain'
    }
};
calculatePayout(mySong);
printSong(mySong);
