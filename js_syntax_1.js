console.log("works in nodeJS!");

// Javascript is case-sensitive

//identifiers 
// only dollar sign, underscore, letter can be the first character
var $money = 5;
var _harry = "harry potter";
var aDog = "charlie";
console.log($money)
console.log(_harry)
console.log(aDog)

// best-practice statement
// always with semicolon, and with brackets even it's simple one line code
var muchMoney = 4 + $money;
if(muchMoney){
    console.log(muchMoney);
}

//keywords and reserved words
// var instanceof = 6; keywords: instanceof
var let = 5; //reserved words: let
var arguments = 8;
console.log(let);

//var operator to define a variable makes it local to the scope in which it was defined
// in global environment, it becomes global. in a function, it remains in a function.
 var message = "hi", age= 29;

 function test(){
     var func = "hi";   //get rid of var, it becomes global
 }
 console.log(func);



