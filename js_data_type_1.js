// 6 data types 
//null undefined boolean string number object

//6 false values corresponding to the data types
//null undefined false "" 0 NaN


//undefined  to distinguish from null
var magic;
console.log(magic);

// var age
console.log(typeof age)
console.log(typeof magic)

//Although typeof returns undefined for both uninitialized and undeclared variables, they are different when coming to real use
//like alert(age) will throw an error, alert(magic) won't, magic has the value of "undefined"


//null pointer is useful when the value is expected but not available yet.
// compare with undefined later would be helpful.
// typeof null is object
if(magic != null){

}


//boolean false and true, any data can be converted into boolean by Boolean function
console.log(Boolean(false));
console.log(Boolean(NaN));
console.log(Boolean("false"));
console.log(Boolean(0));
console.log(Boolean(2));

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