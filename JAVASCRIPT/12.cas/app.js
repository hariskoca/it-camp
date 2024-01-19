const recenica = "Danas pocinjemo rad sa stringovima";
const rec = "Demir";
console.log(recenica);

//Pomocu indeksa pristupamo nekom karaktera stringa.
//indeksiranje ide od 0
console.log(recenica[0]);
console.log(recenica[4]);

console.log(recenica[34]);

//koriscenje lenght metodu za izracunavnje duzine stringe:
const duzinaRecenice = recenica.length;

console.log(duzinaRecenice);
console.log(recenica[duzinaRecenice - 1]);

for (let i = 0; i < 4; i++) {
  console.log(rec(1));
}

//Na osnovu unete recenice od strane korisnika ispisati recenicu tkd karakter ide jedan ispod drugog.
//Dok ako je neki karakter="a", neka se ispise broj 5.
//A u slucaju ds je karakter jednak "s, neka se ne ispise nista"

const recenica = "Mama voli Memu"
let brSl = 0
for (let 1 = 0; 1 <= recenica.length-1 ; i++){
  if (recenica[i] === "m")
}