//Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
/*va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.*/
//il prezzo del biglietto è definito in base ai km (0.21 € al km)

var EuorKm = 0.21;
var KmViaggio = prompt("Quanti km devi fare?");
console.log(KmViaggio);

var AnniPasseggero = prompt("Quanti anni hai?");
var costoIntero = EuorKm * KmViaggio;

 var Sconto = 0;
 
//  var num = 5.56789;
//  var n = num.toFixed(2);

if (AnniPasseggero < 18) {
Sconto = costoIntero * (20/100);

}else if (AnniPasseggero >= 65){
Sconto = costoIntero * (40/100);
}

var prezzoBiglietto = costoIntero - Sconto; 
var prezzoReale = prezzoBiglietto.toFixed(2);

alert(prezzoReale);
