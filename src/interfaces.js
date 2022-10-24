//interfaces allow us to describe the shape of objects & only objects
/* type Pointt = {
    x: number,
    y: number
} */
var pt = { x: 5, y: 7 };
var thomas = {
    first: 'Thomas',
    last: 'Hardy',
    id: 23456,
    sayHi: function () { return 'Hello'; }
};
var shoes = {
    name: 'blue shoes',
    price: 100,
    applyDiscount: function (amount) {
        var newPrice = this.price * (1 - amount);
        this.price = newPrice;
        return newPrice;
    }
};
console.log(shoes.applyDiscount(0.4));
