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
