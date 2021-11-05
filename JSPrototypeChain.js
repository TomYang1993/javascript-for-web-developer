function Person(first){
    this.first = first;
    console.log(first);
}


console.log(Person.prototype.constructor)
console.log(Person.prototype.__proto__ === Object.prototype)
console.log(Person.__proto__ === Function.prototype);
console.log(Function.prototype.__proto__ === Object.prototype)


// always remember getPrototypeOf should match with __proto__, although __proto__ is cheating
// .prototype is the prototype field on the constructor, which is an object, which is the prototype of that instance, not the constructor
// Number.prototype is 123's prototype, which is {}, an empty object, why? because Object constructor constructs this empty object, and {}'s prototype is Object.prototype
// all right a prototype chain is forming here
console.log(new Number(123).prototype)
console.log(Number.prototype)
console.log(Function.prototype)

// Math is a special object type, it does not have prototype field because it is not a constructor. so .prototype is undefined.
// methods are like static methods on the Math.
// But still it has a prototype, which is Object.prototype.a prototype chain is forming here. but this time not Math.prototype pointing to Object.prototype anymore.
console.log(Object.getPrototypeOf(Math))
console.log(Date.prototype)

console.log(Object.prototype)