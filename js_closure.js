// returns an array of functions
// which all return 10
// if the function is defined and executed at the same time, you will see normal output
// but only assign functions to variables, i in the function points to the i in outer scope, i changes
// so we get differnt functions with different return values

function count(){
    var result = new Array();
    for(var i = 0; i< 10; i++){
        result[i] = function(){
            return i;
        };
    }
    return result;
}

var r = count();
console.log(r[2]());