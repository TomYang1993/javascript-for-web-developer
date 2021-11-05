/* typeof */

// good for test primitive values, not good for reference type
console.log(typeof 1);
console.log(typeof "s");
console.log(typeof true);
console.log(typeof null); //object bug!
console.log(typeof undefined);
console.log(typeof NaN); //number
console.log(typeof Symbol());

// only function will have type of function
// others are all just objects
console.log(typeof console);
console.log(typeof {});
console.log(typeof []);
console.log(typeof Math);
console.log(typeof Date);
console.log(typeof RegExp);
console.log(typeof console.log);
function testTypeOf() {}
console.log(typeof testTypeOf);

/* instanceof */

// good for test reference types, can not check primitive values

function myInstanceOf(child, parent) {
  console.log("first", typeof child);
  if ((typeof child !== "object" && typeof child !== "function") || child === null) return false;
  let temp = Object.getPrototypeOf(child);
  console.log(temp);
  if (temp === parent.prototype) {
    return true;
  } else {
    return myInstanceOf(temp, parent);
  }
}

console.log(myInstanceOf(new Number("123"), Number));
console.log(myInstanceOf(123, Number));

/* Object.prototype.toString() */

// toString() has different implementations for all the subclass, e.g. for function it types out the function literal string...
// so every subclass overwrites the top level toString() behavior
// what we need is keep the top level behavior by using call() function
// so it will execute top level toString on the different types of instance

// these are non-sense, because toString() does not take in parameter, so call it like this is meaningless(I think it has default return because it returns [object Object])
// console.log(Object.prototype.toString())
// console.log(Object.prototype.toString({}))
// console.log(Object.prototype.toString(1))

function getType(target) {
  if (typeof target !== "object") {
    return typeof target;
  }
  return Object.prototype.toString.call(target).slice(8, -1);
}
