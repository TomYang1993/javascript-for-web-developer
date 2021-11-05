// explicit

console.log(new String(0));
console.log(new String(3.5));
console.log(new String(true));
console.log(new String(null));
console.log(new String(undefined));
console.log(new String(NaN));
// console.log(new String(Symbol()))
console.log(new String(function () {}));
console.log(new String(console));
console.log(new String(Date));
console.log(new String([]));
console.log(new String({}));

console.log(parseInt(1));
console.log(parseInt(3.5));
console.log(parseInt(true));
console.log(parseInt(null));
console.log(parseInt(undefined));
console.log(parseInt(NaN));
console.log(parseInt(console));
console.log(parseInt(Date));
console.log(parseInt("4.5"));
console.log(parseInt([1]));
console.log(parseInt({ a: 5 }));

// implicit

let a = {
  value: 0,
  valueOf: function () {
    this.value++;
    return this.value;
  },
};

console.log(a == 1&&a==2);

let b = new Date()

console.log(1+b.valueOf())
console.log(1+b.toString())

console.log({a:5}.valueOf())
console.log({a:5}.toString())

console.log([1,2,3].valueOf())
console.log([1,null,3].toString())


console.log(NaN.valueOf())
console.log(new Number(1).toString())

console.log(function(){}.toString())

console.log(Object.prototype.toString.call(null))

console.log({}+10)



let c = {
    value: 3,
    a: {
        valueOf: () => {
            console.log(this.value)
          this.value++;
          return this.value;
        },
      }
}

console.log(c.a.valueOf());