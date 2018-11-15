// pass by value or pass by reference

// function names are pointers, only references, reference changes, so always overwriting, so no overloading
// function can be passed in functions and can be returned, cuz functions are objects

// Function type, functions are objects
// two ways to define
// function declaration
function add(v1, v2){
    return v1 + v2;
}

// function expression
var sum = function (arr){
    var result = arr.reduce(function(pre, cur){
        return pre + cur
    })
    return result;
}
console.log(sum([1,567,3,4,2]));


// this call() apply()
// bind() create a new function instance
// function.call(execution_context, arguments)