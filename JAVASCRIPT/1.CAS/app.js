const naslov = document.getElementById("naslov");
naslov.innerHTML = "naslov ispisan preko JavaScripta";
naslov.style = "color:red; font-size:52px";

//tipovi podataka//

//Da bismo znali tip promenljive u JavaScriptu koristimo typeof operator.

//tipovi podataka delimo na dve grupe:
//1. Primitivni tipovi podataka (vredosni)
//2.Neprimitivni tipovi podataka (referntni)

//1.1. Stringovi- Niz karaktera koji je zapisan pod navodinicima.Obicnim ili duplim.
console.log("Ovo je nas prvi String");
console.log(typeof "Ovo je nas prvi String");

//1.2. number-Predstavlja broj i on moze biti zapisan sa ili bez decimalnog zareza

console.log(25);
console.log(typeof 25);

//1.3. BigInt-Brojevi koji prelaze granice obicnih brojeva.

console.log(BigInt(6723883378747347889337971));
console.log(typeof BigInt(6427923787237436643827327891));

//1.4. Boolean- Logicki entitet koji ima dve vrednosti:true i false.
console.log(true);
console.log(typeof true);

//1.5 undefined - Promenljiva koja je definisana,ali joj nije dodeljena vrednost undefined i tip takodje undefined.

var a;
console.log(a);
console.log(typeof a);

//1.6. null- Predstavlja nekorektnu vrednost ili vrednost koju (za sada) ne postoji
var a = null;
console.log(a);
console.log(typeof a);

//1.7. Symbol- Tip podataka za skladistenje anonimnih i unaktinih vrednosti.
b = Symbol("Demir");
console.log(b);
console.log(typeof b);

//2. Neprimitivni tipovi podataka (referentni)

// Za skladistenje vise vrednosti ili kompleksnih vrednosti se korsite neprimitvni tipovi podataka.
//Svaka promenljiva koja nije primitvnog tipa je tipa object u JS.
// Objekti se koriste za skladistenje neke kolekcije podataka .

//2.1. Array (niz)- predstavlja strukturu podataka za skladistenje vise vrednosti.
//Elementi niza ne moraju biti istog tipa.
niz = ["Demir", 18, true];
//2.2 Object (objekat) -predstavlja strukturu podataka za skladistenje vise vrednosti. Objekti se zapisuju u key:value (name:value) parovima.
obj= {
    ime:"Demir"
    brojGodina : 18,
    punoletan
    
};
console.log(obj);

//2.3. Set-predstavlja strukturu podataka za skladistenje vise vrednosti.Duplikati nisu zadovoljni.
set=new Set(["Kanita",19,true]);
console.log(set); //alo dodamo jos jednu kanitu ta se druga kanita nece videtis
console.log(typeof set);

//2.4. Map-predstavlja  strukturu podataka  za skladistenje vise vrednosti .Slicnu su obj.
map= new Map ([
    ["ime", "Kanita"]
    ["brojGodina",19]
    ["punoletnost", true]
]);