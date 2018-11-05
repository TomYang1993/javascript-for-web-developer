// for-in enumerate properties of an object

// for ( var some in obj){

// }

// for loop is compact and versatile

var count = 10;
var i = 0;

for(;i < count;){
    console.log(i);
    i+=2
}

for(var i =0;i < count;i+=2){
    console.log(i);
}

// nested loops with labeled statements ^^
//https://stackoverflow.com/questions/886955/how-to-break-out-of-nested-loops-in-java?page=1&tab=votes#tab-top
// explains how to gte out of double loops without using labeling loops
// labeling is a quick way, but it isn't the best maintainable and readable way
// for noe, externalize a method to return is the best way so far if you have to double loop and find something(normally the case)