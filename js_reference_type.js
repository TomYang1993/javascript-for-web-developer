// no class in javascript, only reference types


// OBJECT TYPE
//two ways to create object instances
var person = new Object();

var people = {
    "name":"Tom",
    "age": 23,
    5: "nothing",  // number 5 property will be converted into string
    trying: 'no idea'
}

// two ways to access properties, dot notation is preferred, unless property name is not available in dot notation
// the bracket notation is the second choice
console.log(people["5"]);
console.log(people["trying"]);


// ARRAY TYPE
// take in all kinds of data and dynamically sized
// two ways to create array instances

// can take in parameters as elements or as the size of the array
var array1 = new Array("3");  // element string 3
var array2 = new Array(3);    // make a size 3 array

console.log(array1[0]);
console.log(array2[0]);

var arr = [1, 2];
console.log(arr[3]);
arr[5] = "tom";  // all data
console.log(arr[4]);  // dynamically sized

// array length characteristic is read/write, can extend the array
 var arr3 = [45, 2];
 arr3[arr3.length] = 4;
 arr3[arr3.length] = 5;
 console.log(arr3.length);
 arr3.length = 8
 console.log(arr3[6]);

 // Array.isArray() is the definitive function for telling array, even if there are multiple global execution context

// array has toLocaleString() toString() valueOf() methods
// default seperate elements by comma, and call the fnction on each array item
// join() can specify the seperator

var arr5 = ["tom", "yum", "soup"];
console.log(arr5.toString());
console.log(arr5.join("|||").toString());

// array with push pop shift method can form stack, queue like structure
// push pop at the end makes stack "FILO"
// shift at the beginning push at end makes queue "LSLI"
// unshift at the beginning pop at end  makes opposite queue

// ARRAY METHODS

arr5.reverse()
console.log(arr5);
arr5.sort()
console.log(arr5); // compare on string values, need to customize
var arrCopy = arr5.sort(); // returns a reference to original array
arrCopy = [1];
console.log(arr5);

var arr6 = [1,345,123,62,2,34];

arr6.sort();
console.log(arr6);
arr6.sort(compare);

function compare(v1, v2) {
    return (v1 - v2);
}
console.log(arr6);


// CONCAT() SLICE() SPLICE()

var numbers = [1,5,6];

console.log(numbers.concat());   // return exact copy
var numbers2 = numbers.concat("Tom", [1,4], [1,4,"Tom"]);
console.log(numbers);   // no change to original array
console.log(numbers2);

console.log(numbers.slice(2));
console.log(numbers.slice(3,2));
console.log(numbers.slice(1,3));
console.log(numbers.slice(1,4));
console.log(numbers.slice(-2,-1));
console.log(numbers);   // no change to original array

console.log(numbers.splice(0,1,4,5,2,6,2,));  // shows the removed ones
console.log(numbers);   // change to original array
console.log(numbers.splice(1,2));  // shows the removed ones
console.log(numbers);   // change to original array
console.log(numbers.splice(0,1));  // shows the removed ones
console.log(numbers);   // change to original array

// indexOf() lastIndexOf()
// returns index when it's in array, if === , the returns, doesn't care if there is another match
// returns -1 when it's not found

// some() every() forEach() map() filter() has three parameters // item value, index, array(itself)
// some() and every() used to determine a boolean
// filter() used to return a filtered array based on return value
// map used to customize every return value
// forEach is just like for loop

// reduce() reduceRight()
// pre cur index array, iteration starts from cur, so in the first iteration, pre = arr[0], cur = arr[1]




// PRIMITIVE WRAPPER (diffrent with casting functions)

// new Object() follows factory pattern, take in string, produce string instance, takes in number, produce number instance 

// other wrapper methods takes in primitive values and return objects
// these created objects override their own valueOf() toString() methods
var falseObject = new Boolean(false);

console.log(falseObject && true);
console.log(falseObject.valueOf() && true);

// NUMBER TYPE
var testNumber = 73.34623809570928743509;
console.log(testNumber.toPrecision());
console.log(testNumber.toFixed(6));
console.log(testNumber.toExponential(5));


// STRING TYPE

// actions behind scenes so that we can use methods on 'primitive'
var s1 = "test text";
s1.substring(2); // into read mode, create a string instance(object), perform methods on it, destroy the instance
console.log(s1); // s1 is still the primitive string value



// SINGLETON BUILT-IN OBJECT

// Global
// encodeURI() make browser understand the URI, remove invalid characters
// eval() power is to execute javascript in string format

// Window -- browser specific delegated Global object

// Math
// max(), min(),random()




