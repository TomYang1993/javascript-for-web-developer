//  \ back slash to escape characters
// \unnnn nnnn is hexadecimal, to represent unicode characters
console.log("there ia this quote \: \" be yourself \" " + '\u020a');

// strings are immutable, will expand on this


// toString() method is on object, string, number, boolean
var num = 10;
console.log(num.toString());
console.log(num.toString(16));
console.log(num.toString(2));
console.log(undefined.toString());