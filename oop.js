/*
    Delete Operator
*/

const user = { name: "Ahmed"};

console.log(user);
console.log(user.name);

console.log(delete user);  // can't delete because it is const
console.log(delete user.name);  // will return true because it is accepted to be deleted 
// console.log(delete user["name"]); this is accepted syntax also

console.log(user); // Now this object will be empty
console.log(user.name);

console.log("#".repeat(30));

const username = "Ahmed";

console.log(username);
console.log(delete username);  // can't be deleted, so will return false
console.log(username);

console.log("#".repeat(30));

const obj = Object.freeze( {prop: "value"} );  // No properties can be deleted or added to this object

console.log(obj);
console.log(obj.prop);
console.log(delete obj.prop);  // can't be deleted because the object is freezed
console.log(obj);
console.log(obj.prop);

console.log("#".repeat(30));

const emptyObj = {};
Object.defineProperty(emptyObj, "a", { value: 1, configurable: false });
Object.defineProperty(emptyObj, "b", { value: 2, configurable: true });

console.log(emptyObj);
console.log(emptyObj.a);
console.log(delete emptyObj.a);  // can't be deleted because configurable is false
console.log(emptyObj);
console.log(emptyObj.a);

console.log("#".repeat(30));

console.log(emptyObj);
console.log(emptyObj.b);
console.log(delete emptyObj.b);  // can't be deleted because configurable is true
console.log(emptyObj);
console.log(emptyObj.b);