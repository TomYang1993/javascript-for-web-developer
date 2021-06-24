function Person(first){
    this.first = first;
    console.log(first);
}


console.log(Person.prototype.constructor)
console.log(Person.prototype.__proto__ === Object.prototype)
console.log(Person.__proto__ === Function.prototype);
console.log(Function.prototype.__proto__ === Object.prototype)