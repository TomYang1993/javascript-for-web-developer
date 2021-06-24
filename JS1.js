var arr = new Array(3);

console.log(Object.keys(arr));
console.log(arr[0])
console.log(arr)

var b = [4,65];

Array.prototype.push.apply(arr,b);
console.log(arr);
console.log(b);

var a = {a: 1};

[].push.call(a, 2);
[].push.call(a, [3,4,5]);

console.log(a)
console.log(a.toString())
console.log(a.toString().split(" ")[1].slice(0, -1))


  console["log"] = console["log"].bind(
    null,
    new Date().toISOString())



console.log("出错了！");

function Visa() {
    var a =1;
    
    
    /*return {
        add: function() {
            return a++;
        }
    }*/
    
}


var visa = new Visa();
console.log(Object.getPrototypeOf(visa))
var test = {name: "alice"};


Visa.prototype.v = 1;

Visa.prototype.c = test;


console.log(visa.v)
console.log(visa.c.name)
visa.v = 2;
visa.c.name = "tom";
var visa2 = new Visa();
console.log(visa2.v)
console.log(visa2.c)

var obj = {};
Object.defineProperties(obj, {
  'foo': {
    value: 1,
    enumerable: true
  },
  'bar': {
    value: 2,
    enumerable: true
  }
});

console.log(JSON.stringify(obj)); // "{"foo":1}"

var proto = Object.defineProperty({name: "alice"}, 'foo', {
  value: 'a',
  writable: true
});

Object.defineProperty(proto, 'foo', {
  value: 'b'
});

console.log(proto)
console.log(Object.getOwnPropertyNames(proto))
console.log(proto.foo)

proto.foo = 9;

var o = Object.create(proto);
//o.foo =  1;
console.log(o.foo)
console.log(proto.foo)

var testObject = Object.defineProperty({}, 'p', {
  value: 'bar',
});
testObject.prop = "I am a property"

console.log('p' in testObject)
console.log(testObject)
console.log(Object.getOwnPropertyNames(testObject))


for ( var name in testObject ) {
    console.log(name);
  if ( testObject.hasOwnProperty(name) ) {
    console.log("testObject has property: " + name);
  }
}


function copyObject(orig) {
  var copy = Object.create(Object.getPrototypeOf(orig));
  copyOwnPropertiesFrom(copy, orig);
  return copy;
}

function copyOwnPropertiesFrom(target, source) {
  Object
  .getOwnPropertyNames(source)
  .forEach(function(propKey) {
    var desc = Object.getOwnPropertyDescriptor(source, propKey);
    Object.defineProperty(target, propKey, desc);
  });
  return target;
}