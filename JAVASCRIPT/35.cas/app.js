//alert("hello");
//prompt("Select a value")
function de() {}

console.log("first");
setTimeout(() => {
  console.log("text in set Timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("text in Promise");
});

const myPromise = new Promise((resolve, reject) => {
  resolve("This text");
});

console.log("My name is");

setTimeout(() => {
  console.log("timeout");
}, 0);

myPromise.then((result) => {
  console.log(result);
});

console.log("this works");
