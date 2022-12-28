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
//for ex, we want the user only navigate with up, down, left & right
//or a commerce site; we have an order: pending, shipped & delivered 
//and we want them the only statuses we allow for an order
//we can make them 3 variables or instead we can use ENUMS
//which allow us to define a set of constants

enum OrderStatus {
    PENDING,
    SHIPPED, 
    DELIVERED,
    RETURNED,
}

//if we dont assign them values, we hover over and see that each
//constant is assigned to a value starting from 0

const statuss = OrderStatus.DELIVERED;

function isDelivered(status: OrderStatus){
    return status === OrderStatus.DELIVERED
}

isDelivered(OrderStatus.RETURNED);
//console: false

enum ArrowKeys {
    UP = 'up',
    DOWN ='down',
    LEFT = 'left',
    RIGHT = 'right',
}

//if move === ArrowKeys.LEFT

//in order not to pollute JS code, make enum a constant:

const enum OrderStatuss {
    PENDING,
    SHIPPED, 
    DELIVERED,
    RETURNED,
}

/* const order = {
    orderNo: 2321321,
    status: OrderStatuss.PENDING

    in JS: the enum constant is erased and replaced with the order constant's value:
    JS:
    const order = {
        orderNo: 2321321,
        status: 0
    }

} */