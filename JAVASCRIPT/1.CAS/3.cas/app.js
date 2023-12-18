// Postoji nekoliko nacina za prikazivanje podataka u JavaScriptu:
//1.cas innerHTML

paragraf = document.getElementById("paragraf");
paragraf.innerHTML = "Ovo je paragraf.";

//2. document.write()- koristi se samo za testiranje

// 3.alert()

alert("Upozorenje korisniku");

//4. console.lpg()

console.log(paragraf.innerHTML);

// JavaScript name mora da pocinje sa:

//-Slovom (velikim ili malim)(A-Z ili a-z)
//-$ (dolar znak)
//-_ (donjom crtom)

// Promenljive od vise reci:
//nas_brat="Demir" snake case
//Nasbrat= "Demir" lower camel case
nasBratDobri = "Demir";

// Napomena. U nazivu promenljive se moze naci broj,ali ona ne sme poceti brojem.

amir = "Amir je odlican uceniik prve godine srednje skole";
Amir = "Amir je dovoljan uceniik prve godine srednje skole";

//JavaScript je case sensitive!!! (Razlikuje velika i mala slova)
console.log(amir);

//Postoje 4 nacina da deklarisemo promenljivu u JavaScriptu:

//1. koriscenjem var keyword (rezervisane reci)-prvenstveno koriscen na ranijim browserima:
//var prijatno="Prijatno"; primer istovremenog deklarisanja i inicijalizovanja promenljive
var prijatno;
console.log(prijatno);
console.log(typeof prijatno);

prijatno = "Prijatno";
//let brojGodina = 25;

//2. koriscenjem let keyword (rezervisane reci)-koristimo kada je vrednost promenljive(varijable) sklono menjanje

let brojGodina;
brojGodina = 27; // inicijalizacije deklarisane promenljve brojGodina

//3. koriscenjem const keyword (rezervisane reci)- koristimo za vrednosti koje se ne menjaju.

//const ime="Haris" primer istovremenog deklarisanja i inicijalizovanja promenljive pomocu const.

//4. koriscenjem niceg.

mervan = "Mervan";
//Napomena.
// Promenljive (varijable) su kontejneri za skladistenje vrednosti.
