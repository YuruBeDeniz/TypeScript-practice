/* ----------------TUPLES-------------- */
//it is an array with fixed length & ordered with a fixed set of types
//tuples are fixed in their length and types

//example: an rgba color
const color: [number, number, number] = [255, 0, 255];

//create a tuple to store HTTP response: status codes and a message:
[404, 'not found']

type HTTPResponse = [number, string];

const goodRes: HTTPResponse = [200, 'OK'];
goodRes[0] = 400;

//BUT: tuples dont prevent you form pushing on extra elements
//after creation:
goodRes.push(123);
goodRes.pop();
goodRes.pop();
goodRes.pop();
goodRes.pop();

//instead of tuples we can use objects:
/* {
    code: 200;
    msg: 'OK'
} */

const responses: HTTPResponse[] = [[404, 'not found'], [200, 'OK']];


/* ----------------------------ENUMS---------------------- */
