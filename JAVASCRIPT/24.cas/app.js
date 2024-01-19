//U nekoj literaturi cemo naci da je u JS interpreterski jezik. Medjutim,to nije bas tako u potpunosti.
//Naime,u pozadini JS masina kompajlira skriptu (fajl) pre samog izvrsavanja.

var x;
x = 15;

let y;
y = 10;

const z = 5;

w = 20;
console.log(w);

//Hoisting predstavlja znacenje deklaracije na vrhu skripte kako bi se one mogle koristit

prom = 5;
var prom;
//let prom
//const prom
console.log(prom);

const zbirCifara = (broj) => {};
