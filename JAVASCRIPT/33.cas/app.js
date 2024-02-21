const arr = [1, 2, 3, 4, 5, 6];
const arr2 = [];

arr.forEach((element, index) => {
  arr2.push({ element: element, index: index });
});
console.log(arr2);

//koristeci foreach consolo logujete sve elemente niza arr

// arr.forEach((element) => {
//   console.log(element);
// });
// //koristecci foreach da obrisete sve elemente niza arr
// arr.forEach((element,index,array)=> {
// console.log(element,index,array);
// arr.pop()
//}
//)
arr.forEach((element, index, array) => {
  console.log(element, index, array);
  arr.splice(0);
});

const result = arr.reduce((result, value, index, array) => {
  console.log(result, value);
  return result + value;
});
console.log(sum);

const objFromArr = arr.reduce((result, value, index) => {
  console.log(result, value);
  result[index] = value;
  return result;
}, {});

console.log(objFromArr);

const userArray4 = mockData;

//naci niz  adresa svih korisnika iz Townsville
