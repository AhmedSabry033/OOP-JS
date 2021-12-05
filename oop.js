/*
    Defining Object
    [1] Object Literal
    [2] with new keyword
    [3] with object.create()
*/

let mainObj = {
    hasDiscount: true,

    showMsg: function () {
        return `You${mainObj.hasDiscount? "" : " don't"} have Discount`;
    }
}

console.log(mainObj.hasDiscount);  // true
console.log(mainObj.showMsg());  // You have Discount

otherObj = Object.create(mainObj);  // establish as instantiation from object

otherObj.hasDiscount = false;  // modify value for property of object

console.log(otherObj.hasDiscount);  // false
console.log(otherObj.showMsg());  // you have Discount, although we had changed the value of property

let firstObj = {
    hasDiscount: true,

    showMsg: function () {
        return `You${this.hasDiscount? "" : " don't"} have Discount`;
    }
}

console.log(firstObj.hasDiscount);  // true
console.log(firstObj.showMsg());  // You have Discount

secondObj = Object.create(firstObj);  // establish as instantiation from object

secondObj.hasDiscount = false;  // modify value for property of object

console.log(secondObj.hasDiscount);  // false
console.log(secondObj.showMsg());  // you don't have Discount