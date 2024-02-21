function index (){
    const dveReci = "ko osvaja"

    const brojPojavljivanja = recenica.match(/ko osvaja/g).length
    if (!recenica.includes dveReci){
        return "Nismo pronasli dati string"
    }
    else if (brojPojavljivanja >1) {
        return `Pozicija prvog pojavljivanja je:` $(recenica.indexOf(dveReci)); \n
        
    }
}


console.log(w+z)