/*
    Built in constructors
*/

let obj = {  // object created from built-in constructor named object, and declared by { }
    a: 1
};

function User (name) {
    this.name = name,
    this.welcome = function () {
        return `Welcome ${this.name}`
    }
}

let user1 = new User("Ahmed");  // object from created constructor named User
let user2 = new User("Ali");

let num1 = new Number(1);  // object from built-in constructor named Number
let num2 = new Number(2);

let arg1 = new Argument(1);  // error, there is any constructor named argument
let arg2 = new Argument(2);
