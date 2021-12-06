/*
    Constructor Function
*/

// for Best Practice, it is better to write first letter of constructor name as capital
function Phone (serial, color, price) {
    this.serial = serial;
    this.color = color;
    this.price = price - 100;  // if i need to make a modification for one property from the main blueprint
}

let phone1 = new Phone(123, "Red", 500); // phone1 is instance of phone constructor
let phone2 = new Phone(159, "Black", 500); // phone2 is instance of phone constructor
let phone3 = Phone(167, "Silver", 500);  // phone3 is a variable at global scope, because we didn't identify it by "new" Keyword

console.log(phone1.serial);
console.log(phone1.color);
console.log(phone1.price);
console.log(phone1 instanceof Phone);  // true

console.log("#".repeat(30));

console.log(phone2.serial);
console.log(phone2.color);
console.log(phone2.price);
console.log(phone2 instanceof Phone);  // true

console.log("#".repeat(30));

console.log(window.serial);
console.log(window.color);
console.log(window.price);
console.log(phone3 instanceof Phone);  // false