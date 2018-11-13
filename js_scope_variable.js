// javascript is pass by value
// pass by reference is actually pass the value of the reference

var person2 = new Object();
person2.name = "Linda";

function setName(obj) {
    obj.name = "Tom";
    obj = person2
}

var person = new Object();
setName(person);
console.log(person.name);  // will output tom, cuz pass by value of the reference(the pointer)
                           // not the memory location of obj(person), so when the pointer was pointed to person2
                        // has no effect on person object


// typeof and instanceof
// typeof mainly tell differences between primitive and object, determines primitive types
// instanceof are used between objects, used with primitives will always return false, determine reference types

//sc:
console.log(typeof null);