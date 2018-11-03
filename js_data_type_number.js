// floating number
// recommend hexadecimal for integers
// be careful about floating number arithmetic computations because of rounding errors
// because of memory constraints, thers is +Infinity, -Infinity

console.log("special case", +0 == -0);
var num = 3236236163473484584786969569;
console.log(num);

console.log(Number.POSITIVE_INFINITY);

// NaN is a special case typically for not halting other processing, like some number / 0
// it will return NaN, but the process doesn't stop
// isNaN function can take in an object, so like take in a string, it has several steps before it gets the real
//function of NaN, for object, it will call valueOf() and toString()
//so always keep in mind, every function maybe is not like its appearance

console.log(isNaN(true));   // true will be converted to 1 here

console.log(isNaN(false));

// 3 converting functions Number(), parseInt(), parseFloat()
console.log(Number("123"));
console.log(Number(true));
console.log(Number("123.4"));
console.log(Number(null));
console.log(Number(""));
console.log(Number(undefined));
console.log(Number("123b"));

console.log(parseInt("0123")); 
// console.log(parseInt("true")); 
// console.log(parseInt("null")); 


//parseInt, Number function differences
//parseInt only valid for string starts with number, +, -, which makes sense when it comes to common-sense math
//Number can convert boolean, null, "", too complex

//recommend using parseInt with radix always
console.log(parseInt("235", 10));