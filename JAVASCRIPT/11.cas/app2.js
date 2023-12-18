//while petlja se koristi za interaciju kroz neki objekat.
//definise se drugacije u odnosu na for petlju.

//vreme = "Suncano";
//while (vreme === "Suncano") {
//console.log("Danas je lep dan");

let i = 1;
while (i < 6) {
  console.log(i);
  //Kad zavrsimo celu logiku za kod pod odredjenimm uslovom moramo menjati i.
  i++;
}

//do white petlja se koristi za iteraciju kroz neki objekat.
//Razlika u odnosu na while petlju je sto se prvo izrsava kod pa tek onda proverava naslov

let j = 1;
do {
  console.log(j);
  j++;
} while (j < 6);

//nedostatak:
let z = 10;
do {
  console.log(z);
  z++;
} while (z < 6);

//While
//Traziti od korisnika da unese neki broj.
//Na osnovu te vrednosti izvrisiti ispis hvadrata brojeva 1 do tog unetog broj
//const k = +prompt("Unesite broj:");
//let iter = 1;
//while (iter <= broj) {
//console.log(iter ** 2);
//iter++;
//Traziti unos brojeva od korisnika  sve dok ne unese nulu:
//2.
//Korisnik unosi 2 broja:
//Na osnovu toga koji je broj manji
