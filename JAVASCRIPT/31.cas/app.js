const arr1 = [1, 2, 3, 4, 5, 6];

const sum = (a, b) => a + b;
const div = (a, b) => a - b;
const sum1 = (a, b) => a * b;
const div1 = (a, b) => a / b;

const executeFnOnArray = (arr, initValue, fn) => {
  let result = initValue;

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    result = fn(result, element);
  }

  return result;
};

console.log(executeFnOnArray(arr1, 0, sum));
console.log(executeFnOnArray(arr1, 0, div));
console.log(executeFnOnArray(arr1, 1, sum1));
console.log(executeFnOnArray(arr1, 1, div1));

const printThanks = (text) => {
  console.log(text);
  console.log("Dont ever come again. Haris ");
};

//Napraviti funkciju koja na stirngu stavlja sva prva slova velika
//takodje prima i drugi prop funkciju iznad printThanks koja poizva sa rezultatom ove funkcije

const makeUppercase = (text, fn) => {
  const result = text.toUppercase();
  fn(result);
};

makeUppercase("Ovo je bas lep dan", printThanks);

setTimeout(() => {
  console.log("This happends after 5s");
}, 5000);

const toUppercase = (text) => text.toUppercase();
const toLowerCase = (text) => text.toLowerCase();
const replaceAllSpaces = (text) => "text".replace("", "-");
const addYtoEveryWord = (text) => text.replaceAll("", "y");
const result = text.replaceAll("", "y");

const executeStringCommand = (text, command) => {
  const result = command(text);
  console.log(result);
};

executeStringCommand("Ovo je moj text", toUppercase);
executeStringCommand("Ovo je moj text", toLowerCase);
executeStringCommand("Ovo je moj text", replaceAllSpaces);
executeStringCommand("Ovo je moj text", addYtoEveryWord);
