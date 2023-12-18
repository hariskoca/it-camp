// Switch naredbu koristimo kada zelimo kroz slucajeve pokriti tacne moguce vrednosti

switch (5 - 3) {
  case 10:
    //kod koji se izvrsava ako je izraz===10
    break;
  case 5:
    //kod koji se izvrsava ako je izraz===5
    break;
  case 2:
    //kod koji se izvrsava ako je izraz===2
    break;
  default:
  //kod koji se izvrsava ako nisu zadovoljni prethodni slucajevi
}

//break keyword stavljamo na kraju slucajno da se ne bi izvrsio kod od narednog slucaju koji nije zadovoljen.
//Dani u nedelji:
//  Napisi program koji ce trziti od korisnika da unese redni broj dana u nedelji(1 za poneedeljak,2 za utorak,itd.) i ispisati ime tog dana.

const dan = +prompt("Unesite redni broj dana u nedelji");

switch (dan) {
  case 1:
    console.log("Ponedeljak");
    break;
  case 2:
    console.log("Utorak");
    break;
  case 3:
    console.log("Sreda");
    break;
  case 4:
    console.log("Cetvrtak");
    break;
  case 5:
    console.log("Petak");
    break;
  case 6:
    console.log("Subota");
    break;
  case 7:
    console.log("Nedelja");
    break;
  default:
    console.log("Pogresan unos");
}

console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(6);
console.log(7);
console.log(8);
console.log(9);
console.log(10);

//2.nacin

//Za iteraciju kroz neki objekat (niz,karaktere stringa...) u javasc koristimo petlju.
//postoje 3 petlje
