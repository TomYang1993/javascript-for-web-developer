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

//FACTORY PATTERN
function createPerson(name, age){
    var obj = new Object();
    obj.name = name;
    obj.age = age;
    return obj
}
var person1 = createPerson("TOM", 34);


// CONSTRUCTOR PATTERN
// must use the new keyword
// factory pattern can not tell what type an object is, but constructor can
// use instanceof method or the constructor field on the object
// each object has a constructor property
function Person(name, age){
    this.name = name;
    this.age = age;
    this.sayname = function(){
        console.log(this.name);
    }
}
var person2 = new Person("TOM", 34);

// PROTOTYPE PATTERN
// constructor pattern has its flaws, it tells the type but methods defined within is duplicated 
// instances of Function type which they have the same function and content are waste of space, so prototype pattern can help
// each function has a prototype property, which is an object containing shared properties and methods
// instances created by the function have the different pointers which point to the same prototype

function Car(){

}

// Car.prototype.make = "honda";
// Car.prototype.year = 2018;
// Car.prototype.sayInfo = function(){
//     console.log(this.make);
// }

// alternative way of writing, save the Car.prototype duplicates, but back to the pointers aanddn you can not overwrite prototype
// so the constructor must be set back from Object to Car
// when you assign the object literal from right to left, its constructor becomes Object because the object literal is created
// by Object function, and Car.prototype's pointer points to the new object not the original prototype Car function had

Car.prototype = {
    constructor: Car,
    make: "honda",
    yaer: 2018,
    sayinfo: function(){
        console.log(this.make);
    }
}

var car1 = new Car();

// pointer between instance and Function.prototype is not directly accessible(though __proto__ in chrome,firefox,safari)
// so there are methods : isPrototypeOf() getPrototypeOf()

console.log(Person.prototype.isPrototypeOf(person2));
console.log(Object.getPrototypeOf(person2));
console.log(Object.getPrototypeOf(person1));

console.log(Person.prototype.isPrototypeOf(car1));


// it's not possible to overwrite properties on the prototype, only can shadow the properties
// so there is hasOwnProperty() method

console.log(person2.hasOwnProperty("name"));
console.log(car1.hasOwnProperty("make"));


// for-in loop to get all properties on this object and its prototype
// Object.keys() get all the enumerable properties
// Object.getOwnPropertyNames()

// use prototype dynamic nature wisely (even after instance was created you can still hac access to new prototype properties)
// alternative way of defining with object literals may cause problems again because 
// it's the pointers connect object to prototype

function Car(){

}

var car2 = new Car();

Car.prototype.sayHi = function(){
    console.log("hello");
}

// won't work as follows
// Car.prototype = {
//    sayHi: function(){
//      ...
//    }
//}

car2.sayHi();


// PROTOTYPE PATTERN has its own problems
// this pattern is ideal for functions, every object get an initial value when it comes to properties contain 
// primitive values, because you can always shadow the original value
// but reference values are shared between objects, that's not feasible
// best practice is to combine CONSTRUCTOR PATTERN and PROTOTYPE PATTERN

function People(name, age){
    this.groupName = name;
    this.averageAge = age;
    this.friends = ["tom", "michael"];
}

People.prototype = {
    constructor: People,
    showList: function(){
        console.log(this.friends);
    },
    add: function(name){
        this.friends.push(name);
    }

}

var person3 = new People("oxygen",25);
var person4 = new People("nytrogen",30);

person3.add("Tracy");

// have different copies
console.log(person3.friends);
console.log(person4.friends);

// share the same function
person3.showList();
person4.showList();

// INHERITANCE
// only prototype chaining has same problems as only prototype type object creation
// the properties are all pointers so parent properties will be influenced by children properties
// with constructor stealing
// children can have copies of the parent properties
// same thing with only constructor stealing, function get copies too
// combination inheritance 

// **********************************  make two Super constructor calls//
// function Super(name){
//     this.name = name;
// }

// Super.prototype.sayHi = function(){
//     console.log(this.name);
// }

// // inherit functions
// Sub.prototype = new Super();

// // inherit properties, and pass parameters, so Sub can have its own names input
// function Sub(name, age){ 
//     Super.call(this, name);
//     this.age = age;
// }

// var person5 = new Sub("TOM", 26);
// console.log(person5.name);
// console.log(person5.age);
// person5.sayHi();

/* ******************************************** */

// Above is more traditional oop
// prototypal inheritance which is more javascript oriented(makes things messier in my opinion)

// Object.create() established prototype connection between the object returned and the parameter object

function Super(name){
    this.name = name;
    this.colors = ["red","blue"];
}

Super.prototype.sayHi = function(){
    console.log(this.name);
}

// inherit properties, and pass parameters, so Sub can have its own names input
function Sub(name, age){ 
    Super.call(this, name)
    this.age = age;
}

inherit(Sub, Super);

var person5 = new Sub("TOM", 26);

// object.create creates a copy of Super.prototype(an object), which only has methods, no properties
// all the properties like colors needs to run the constructor
// this way of writing inheritance only makes one Super constructor call
function inherit(Sub, Super){
    var prototype = Object.create(Super.prototype);
    prototype.constructor = Sub;
    Sub.prototype = prototype;
}

console.log(Sub.prototype.colors)
console.log(person5.colors)








