var obj = {
    name: "lucas"
}

var description = Object.getOwnPropertyDescriptor(obj, "name")
console.log(description);

obj.name = "tom";
console.log(obj.name);

var person = {}

// use defineProperty all defaults to false, guess it's because defineProperty is rarely used yet powerful,
// to create an immutable object
// on the other hand, object literal all defaults to true, because objects are always changing, no matter the values/properties/methods
Object.defineProperty(person, "name", {
    value: "nicolas"
})

description = Object.getOwnPropertyDescriptor(person, "name")
console.log(description);
// configurable writable all false
person.name= "tom";
console.log(person.name);

// configurable affects behavior in three main ways
// 1. remove properties (via delete)
// 2. change properties (should be the value of the property)
// 3. change property type(between data type and accessor type)



// configurable false means can not attempt to call defineProperty again
var test = {}
Object.defineProperty(test, "name", {
    value: "nicolas",
    writable: true
})

description = Object.getOwnPropertyDescriptor(test, "name")
console.log(description);

//even change writable property doesn't work because it's attempting to call again
// unless one situation that writable is originally true and you can set to false
// any other path is impossible
Object.defineProperty(test, "name", {
    writable: false
})

test.name= "tom";
console.log(test.name);

description = Object.getOwnPropertyDescriptor(test, "name")
console.log(description);

// Object.defineProperty(test, "name", {
//     enumerable: true
// })

description = Object.getOwnPropertyDescriptor(test, "name")
console.log(description);


