//Zadatak.Prebrojati koliko ima znakova koji su cifre u unetom stringu.

const string = prompt("Unesite recenicu");
let brCf = 0;
for (let i = 0; i < string.length; i++) {
  switch (string[i]) {
    case "0":
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
      brCf++;
      break;
  }
}
console.log(brCf);

let brCf2 = 0;
for (let i = 0; i < string.length; i++) {
  if (isNaN(string[i])) {
    brCf2++;
  }
}

const string2 = "Ovo sve da bude jedna rec";
let noviTekst = "";
for (let i = 0; i < string2.length; i++) {
  if (string2[i] !== "") {
    noviTekst += string2[i];
  }
}
console.log(noviTekst);

// 2. Napraviti novu recenicu gde ce umesto slova "a" pisaati "t
//Dok ako se posle slova "a" nalazi slovo "n" pisace "d" umesto "a".
const originalnaRecenica = "Danas je lep dan";
