// 6. Sva velika slova u stringu treba svesti na mala slova.Npr. za uneto 'WEBnSTUDY.com', dobija se novi stirng 'webnstudy.com'.Slova kojase korsite u stringu pripadaju iskljucivo eng abecedi.

const toLower = (str) => toLowerCase();
console.log(toLower("KoMBINAcija VELIKIH i Malih sloVa."));

//2.Pronaci poziciju poslednjeg razmaka u stringu.Npr. za uneto "Pera ima devojku" rezultat je 8.

function lastIndex(str) {
  lastPosition = str.lastIndexOf("");
  if (lastPosition === -1) {
    return "Dati string nema razmaka.";
  } else {
    return lastPosition;
  }
}
console.log(lastIndex("Pera ima devojku"));
console.log(lastIndex("Pera"));

//8. Ispisati duzinu prve reci unetog stringa.Npr. za uneto 'Pera ima devojku' rezultat je 4. Podrazumeva se da ste uneli stirng nema vodece razmake

const duzinaPrveReci = (str) => str.indexOf("");
console.log(duzinaPrveReci("Danas smo bas tihi"));

//9.
