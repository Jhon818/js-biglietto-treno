//Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
/*va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.*/
//il prezzo del biglietto è definito in base ai km (0.21 € al km)

var EuorKm = 0.21;
alert("Quanti km devi fare?");

var KmViaggio;
prompt(KmViaggio);

alert("Quanti anni hai?")

var AnniPasseggero;
prompt(AnniPasseggero);

 var Sconto;
if (AnniPasseggero < 18) {
   

Sconto = EuorKm * (20/100);

    alert(Sconto);

}else if (AnniPasseggero >= 65){
Sconto = EuorKm * (40/100);
}

else{
var costoIntero;

costoIntero = EuorKm * KmViaggio;

alert(costoIntero);
}