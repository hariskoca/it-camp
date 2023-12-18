//1.	(20) Traziti od korisnika unos nekog realnog broja. Nakon toga ispisati u konzoli kvadrat tog broja (poželjno je obuhvatiti slučaj kada korisnik ne unese odgovarajuću vrednost).

//2.	(20) Napisati program koji ispisuje u konzoli brojeve od 1 do 100(uključujući) tako da:

//(i)	ako je broj deljiv sa 3, potrebno je ispisati ‘FIZZ’ umesto tog broja;
//(ii)	ako je broj deljiv sa 5, potrebno je ispisati ‘BUZZ’ umesto tog broja;
//(iii)	ako je broj deljiv i sa 3 i sa 5, potrebno je ispisati ‘FIZZ BUZZ’ umesto tog broja.

//3.	(20)
//Ispisati prva tri broja koji su deljivi sa 4 i 6.

//2.

for (i = 1; i <= 100; i++) {
  if (i % 5 == 0 && i % 3 == 0) {
    console.log("FIZZ BUZZ");
  } else if (i % 3 == 0) {
    console.log("BUZZ");
  } else if (i % 5 == 0) {
    console.log("FIZZ");
  } else {
    console.log(i);
  }
}

// 1.

let nekiBroj = +prompt("Unesite neki broj");
if (isNaN(nekiBroj)) {
  console.log("niste uneli broj");
} else {
  console.log(nekiBroj ** 2);
}
