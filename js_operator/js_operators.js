var num1 = 5;
var num2 =10;

// statement follows order from left to right, prefix unary operator makes change first
var num3 = num1++ + --num2;
var num4 = num1 + num2;

console.log(num3);
console.log(num4);

// unary operators(increment/decrement  plus/minus) can be used on string, number, boolean, object (doing inversions)

// bitwise operators, always act on numbers
// singed negative number process: 1. absolute value positive number binary representation
// 2. inversion of the binary representation
// 3. add 1 to the result
// javascript makes it easier adn more logical format, than the above process behind scene

var num6 = -18;
console.log(num6.toString(2));

// bitwise NOT operator (inversion)
// inversion negates the number and subtracts 1, explains why negative signed number needs step 2,3 above

var num7 = 25;
var num8 = ~num7;

console.log("NOT", num8);

// bitwise AND
// one rule result never goes up than the smaller number 

var num9 = 42;
var num10 =6;

console.log("AND", num9 & num10);

// bitwise OR and XOR
console.log("OR",num9 | num10);
console.log("XOR",num9 ^ num10);

// boolean operators ! / || / &&
// ! operator always return boolean values
// || and && don't always return primitive boolean values, but returns equivalent
// e.g. return null, which is a falsy value, in (if condition) reads as false
var obj = {};
console.log(obj && null);
console.log(null && obj);

// multiply, divide, modulus operator
//anything contains NaN, the result will be NaN

console.log(Infinity * 0);
console.log(Infinity / Infinity);
console.log(0 / 0);
console.log(Infinity % 5);
console.log(5 % 0);
console.log(Infinity % Infinity);

// add operator needs attention when it comes to string

console.log("this is a " + true);
console.log("this is a " + 5);
console.log("this is a " + 6 + 78);
console.log("this is a " + null);
console.log("this is a " + obj);

// subtract operator needs attention about number
console.log(Number(undefined));
console.log(0 - undefined);

