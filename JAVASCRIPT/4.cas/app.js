// Promenljivo definisane preko var keyword mozemo ponovo deklarisati (izvrsiti redeklaraciju), kao i reinicijalizacije (novo dodeljivanje vrednosti).mozemo izvrsiti i u istom prostoru.

var x = 10;
console.log(x);

x = 14;
console.log(x);

var x = 15;
console.log(x);

//let i const keywords obezbedjuju Block Scope.

let y = 3;
console.log(y);

y = 6;
console.log(y);
//let y=50 nije dozvoljeno  redaklarisanje u istom prostoru

{
  //console.log(y); y se propoznaje iz global scope
  let y = 20;
  console.log(y);
}
console.log(y);
