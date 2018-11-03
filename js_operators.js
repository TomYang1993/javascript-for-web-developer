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

console.log(num8);

// bitwise AND

var num9 = 42;
var num10 =6;

console.log(num9 & num10);
