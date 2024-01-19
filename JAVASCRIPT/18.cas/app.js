function suma(broj) {
  let suma = 0;
  for (let i = 1; i <= broj; i++) {
    suma += i;
  }
  return suma;
}

console.log(suma(4));

//Traziti unos korisnickog imena sve dok korisnik ne unese ispravno korisnicko ime

let ime = prompt("Unesite korisnicko ime");
while (ime(ime.length - 1) < 6) {
  ime = prompt("Unesite korisnicko ime");
}

// TRUTHY I FALSY vrednosti nam oloksavaju pisanje uslova.
//Ako je vrednost truhty,to znaci da je uslov zadovoljrn i da ce se izvrsiti kod koji treba
//Ako je vrednost falsy tp znaci da uslov nije zadovljen i da se nece izvrsiti kod koji sled.
//postoji 8 falsy vrednosti

//1. false
//2. ""
//3. 0
//4. -0
//5. 0n
//6.Nan
//7. Undefined
//8. null

//Trazi se unos od korisinika sve dok neunese bilo sta:
let vrednost = prompt("Uneisite vrednost");
