setTimeout(function() {
  console.log("Timeout");
}, 0);

function a(x) {
  console.log("a() 开始运行");
  b(x);
  console.log("a() 结束运行");
}

function b(y) {
  console.log("b() 开始运行");
  setTimeout(function() {
  console.log("in b function");
}, 0);
  console.log("传入的值为" + y);
  console.log("b() 结束运行");
}

console.log("当前任务开始");
a(42);
console.log("当前任务结束");