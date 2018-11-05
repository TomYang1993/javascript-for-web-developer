// relational operator
// < > operands are string, compare starts from first character, and depends on character code number
var brick = "Brick";
var ant  = "ant";
console.log(brick < ant);

// In common sense, brick and ant comparison doesn't make sense, so normally we put toLowercase()

// another edge case
console.log("23" < "3");

// normally we compare with real numbers, be careful when it's all string

console.log("23" < 3);

//when compared to a real number, always converted to a number first, which leads to some odds
console.log("a"< 3);    // here "a" converted into NaN
console.log("a">= 3);

// Equality operators
// two set of operators, where == do type conversion, === without type conversion
console.log("Equality check!");
console.log(true == 1);
console.log("1" == 1);
console.log(null == undefined)
console.log(null != 0)
console.log(null != false)
console.log(undefined != 0)
console.log(NaN != NaN)

// conditional operator

var max = 2>1 ? 2 : 1;
console.log(max);

// assignment operator  + - / * %
var number12 = 0
number12  += 35;
console.log(number12);

// comma operator
// sc: in the parenthesis expression, it assigns last item in the expression

var num13 = (3, 5, 2, 6);
console.log(num13);





