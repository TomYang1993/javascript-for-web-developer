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

