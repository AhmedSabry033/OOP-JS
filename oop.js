/*
    Constructor Function
    Dealing with properties
*/

function User (fName, lName, age, country) {
    this.fName = fName;
    this.lName = lName;
    this.age = age;
    this.country = country;

    this.fullName = function() {
        return `Full Name: ${this.fName} ${this.lName}`;
    }

    this.ageInDays = function() {
        return `Age in Days: ${this.age * 365}`;
    }
}

let user1 = new User("Ahmed", "Sabry", 28, "Egypt");
let user2 = new User("Ahmed", "Ali", 30, "Ksa");

console.log(user1);
console.log(user1.fullName());
console.log(user1.ageInDays());

console.log(user2);
console.log(user2.fullName());
console.log(user2.ageInDays());