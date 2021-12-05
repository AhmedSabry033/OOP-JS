/*
    Defining Object
    [1] Object Literal
    [2] with new keyword
    [3] with object.create()
    [4] with object.assign
*/

const src1 = {
    prop1: "value1",
    prop2: "value2",

    method1: function () {
        return `method1`;
    }
}

const src2 = {
    prop3: "value3",
    prop4: "value4",

    method2: function () {
        return `method2`;
    }
}

const target = {
    prop5: "value5"
}

Object.assign(target, src1, src2, { prop6: "value6"});

console.log(target);

myObj = Object.assign({}, target, { prop7: "value7" });

console.log(myObj);

console.log(myObj.prop1);
console.log(myObj.prop3);
console.log(myObj.prop5);
console.log(myObj.method1());
console.log(myObj.method2());