//objects
//creating objects, accessing values in objects,adding all types as value
//cleaning objects,transforming objects into arrays

const obj = {};
const obj1 = new Object();

const obj2 = {
  key1: "This is a value 1 ",
  key2: false,
  key3: 12,
  key4: null,
  key5: undefined,
  key6: function name(panams) {},
};

//acessing values in objects
console.log(obj2);
console.log(obj2.key1);
console.log(obj2.key2);
console.log(obj2.key3);
console.log(obj2.key4);
console.log(obj2.key5);
console.log(obj2.key6);

console.log(obj2);
console.log(obj2);
obj2.key1 = "This is changed";

// function sum(a, b, o) {
//   a = 20;
//   b = 30;
//   o.name = 12;
//   o = { name: 10 };
//   console.log(a, b, o);
// }

// const x = 2;
// const y = 3;

// sum(a, b);
// sum(1, 2);
// console.log(x, y);
