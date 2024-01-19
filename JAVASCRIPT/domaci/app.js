function izdvojenaLEVA(recenica, N) {
  let drugaRecenica = recenica.substr(0, N);
  if (drugaRecenica.length <= N) {
    return drugaRecenica;
  } else {
    return recenica;
  }
}
console.log(izdvojenaLEVA("Pera ima devojku", 8));

function izdvojenaDESNASLOVA(recenica, F) {
  let drugaRecenica = recenica.slice(-F);
  return drugaRecenica;
}
console.log(izdvojenaDESNASLOVA("Pera ima devojku", 4));
