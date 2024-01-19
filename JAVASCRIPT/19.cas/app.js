//STRINGOVI SU IMMUTABLE VREDNOSTI
//const recenica = "Danas je bio 'suncan' dan";

//const recenica2 = 'Danas je bio "suncan" dan';

const recenica3 = 'Danas je bio "suncan" dan';
console.log(recenica3);

const recenica4 = "sta ako zelimo \\ da se nadje u tekstu";
console.log(recenica4);

const recenica5 =
  "sta ako zelimo da se nadje u tekstu?\
sta ako zelimo da se nadje u tekstu?\
sta ako zelimo da se nadje u tekstu?\
sta ako zelimo da se nadje u tekstu?\
sta ako zelimo da se nadje u tekstu?";

const recenica6 = "sta ako zelimo da se nadje u tekstu? \n sta ako";
console.log(recenica6);
//Postoje 3 metode za ekstraktovanje dela stringa:

//slice(start,end) start se ukljucuje,end se ne ukljucuje

const isecak = recenica6.slice(0, 3);
console.log(isecak);

console.log(recenica4.slice(8, recenica4.length)); //do kraja
console.log(recenica4.slice(8, recenica4.length)); //do kraja

console.log(recenica4.slice(-7));

const rec = "rec";
console.log(rec.toUpperCase());
console.log(rec);

const ime = "Demir";
const prezime = "Miraljemovic";

console.log(ime + " " + prezime);

const imeIPrezime = ime.concat(prezime);
