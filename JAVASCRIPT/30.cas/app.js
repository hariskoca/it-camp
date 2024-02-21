const niz = [];
const niz2 = [1, 2, 3, 4, 5, 6];
const niz3 = [1, false, null, undefined, "", {}];

console.log(niz2[1]);
console.log(niz2[niz2.length]);

niz2.push("Ovo je string ");
niz2.pop();

niz2.unishift("Ovo je pocetak");
niz2.shift();

niz.splice(2, 1);
niz.splice();
console.log(niz2);

for (let i = 0; i < niz2.length; i++) {
  const element = niz2[i];
  console.log(element);
}

//vrati true ili false ako niz ima stirng kao element
// function isStringInArray(niz) {
//   for (let i = 0; i < niz.length; i++) {
//     if (typeof niz[i] === "string") {
//       return false;
//     }
//   }
// }
// console.log(isStringInArray(niz2));
// console.log(isStringInArray(niz3));

function isUndefinedInArray(niz) {
  for (let i = 0; i < niz.length; i++) {
    if (typeof niz[i] === "undefined") {
      return true;
    }
  }
  return false;
}

console.log(isUndefinedInArray(niz3));

const multiniz = [[1, 2, 3][(4, 5, 6)][(7, 8, 9)]];
multiniz[1][1];

console.log(multiniz[1][1]);

multiniz[0][0];
console.log(multiniz[0][0]);
multiniz[2][2];
console.log(multiniz[2][2]);

for (let i = 0; i < multiniz.length; i++) {
  for (let j = 0; j < multiniz[i].length; j++) {
    console.log(multiniz[i][j]);
  }
}
function isStringInMatrix(matrix) {}

console.log(isStringInMatrix(multiniz));

const users = [
    {name:"Suad" surname:"Suljovic"},
    {name:"Vahid" surname:"Konicanin"},
    {name:"Suad" surname:"Hodzic"},
    ];

    console.log(users[0].name)
    console.log(users[2].surname)
    