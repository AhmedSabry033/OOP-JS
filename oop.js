/*
    Defining Object
    [1] Object Literal
*/

let user = {

    // Properties
    firstName: "Ahmed",
    lastName: 'Sabry',
    age: 28,

    // Methods
    getFullName: function () {
        return `Full Name: ${user.firstName} ${user.lastName}`;
    },

    getAgeInDays: function () {
        return `Your Age in days ${user.age * 365}`;
    }

}

// Accessing Object Properties
console.log(user.firstName);  // Dot Notation
console.log(user["lastName"]); // Bracket Notation

console.log(typeof user.firstName);  // string


// Accessing Object Methods
console.log(typeof user.getFulName);  // function

console.log(user.getFullName());
console.log(user.getAgeInDays());
