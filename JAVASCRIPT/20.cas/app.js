console.log("Nema Merice");

//JavaScript Template literals
//Template Literals koristi back tics sintaksu (``)za ispisivanje stringa.
//Back Tics sintaksa

console.log(`String u drugacijoj sintaksi`);

//Navodnici unutar stringa
//Sa template Literala mozemo koristi navodnike(duple ili obince) unutar stringa
console.log(`String u "drugacijoj" sintaksi`);
console.log(`String u 'drugacijoj' sintaksi`);

const recenica = `sta ako zelimo da se nadje u tekstu?
 sta ako zelimo da se nadje u tekstu?
  sta ako zelimo da se nadje u tekstu?
sta ako zelimo da se nadje u tekstu?
  sta ako zelimo da se nadje u tekstu?
sta ako zelimo da se nadje u tekstu?`;
const ime = "Amir";
const godine = 16;

const poruka = `Nas kolega ${ime} ima ${godine} i on je uradio svoj domaci`;

// replace() metoda se koristi xs menjanje specifinog karaktera ili niza karaktera odredjenog stringa.

const recenica2 = "Danas je padao sneg.Mada veceras, takodje pada sneg.";
const recenica3 = recenica2.replace("sneg", "kisa");
console.log(recenica2);
console.log(recenica3);

const recenica4 = recenica2.replace(/sneg/i, "kisa");
console.log(recenica4);
