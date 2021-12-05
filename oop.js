/*
    Defining Object
    [1] Object Literal
*/

let user = {

    // Properties
    firstName: "Ahmed",
    lastName: 'Sabry',
    age: 28,

    // Object
    addresses: {
        usa: "California",
        eg: "Ismailia",
        ksa: "Riyadh",

        getMainAddress: () => `Main Address is in Egypt in city ${user.addresses.eg}`
    },

    // Methods
    // Arrow function ES6
    getFullName: () => `Full Name: ${user.firstName} ${user.lastName}`,
    // Literal function 
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


// Accessing Object Nested Object
console.log(user.addresses.eg);  // Dot Notation
console.log(user["addresses"]["ksa"]);  // Bracket Notation

console.log(user.addresses.getMainAddress());