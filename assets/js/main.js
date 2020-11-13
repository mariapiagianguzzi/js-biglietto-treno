//Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
//Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
//il prezzo del biglietto è definito in base ai km (0.21 € al km)
//va applicato uno sconto del 20% per i minorenni
//va applicato uno sconto del 40% per gli over 65//



//NUMERO DI KM DA PERCORRERE//
var kilometers = parseInt(prompt("Quanti chilometri vuoi percorrere?"));

//ETA' DEL PASSEGGERO//
var age = parseInt(prompt("Quanti anni hai?"));

//PREZZO DEL BIGLIETTO IN BASE AI CHILOMETRI//
var kmPrice = kilometers * 0.21;

//SCONTO DEL 20% AI MINORENNI//
var sconto; 

if (age < 18){
    sconto = (kmPrice * 20) / 100;
} else if (age >= 65) {
    sconto = (kmPrice * 40) / 100;
} else {
    sconto = 0 
} 

//PREZZO FINALE// 
var prezzoFinale = kmPrice - sconto; 

document.getElementById('prezzo').innerHTML = prezzoFinale.toFixed(2);