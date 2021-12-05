/*
    Defining Object
    [1] Object Literal
    [2] with new keyword
*/

let user = new Object();

user.firstName = "Ahmed";
user.lastName = "Sabry";
user["age"] = 28;

user.getFullName = function () {
    return `Full name is ${user.firstName} ${user.lastName}`
}

console.log(user.firstName);
console.log(user["lastName"]);
console.log(user.age);
console.log(user.getFullName());