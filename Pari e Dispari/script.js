// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.




//chiedo all'user di inserire un numero e di scegliere tra pari e dispari
const numeroUser = parseInt(prompt('inserisci un numero da 1 a 5'));
const sceltaUser = prompt('scegli tra pari e dispari');


//creo una funzione che mi generi un numero randomico
function numRandom(min, max) {
    const randomNum = Math.floor(Math.random() * max) + min;
    return randomNum;
}


//creo una variabile che mi prenda il numero uscito dalla funzione e lo stampi
let consoleNumero = numRandom(1, 5);
console.log('il numero generato randomicamente dalla console è:', consoleNumero);



//creo una funzione che mi faccia la somma del numero inserito e quello generato randomicamente

function numeriSum (numero1, numero2) {
    let sommaNumeri = (numero1 + numero2);
    return console.log("la somma dei numeri è", sommaNumeri);
}


//somma tra i due numeri
const numeriSommati = numeriSum (numeroUser, consoleNumero);

if(numeriSommati % 2 === 0) {
    console.log('il numero e pari');  
} else {
    console.log('il nuemero e dispari');
}


//creo una condizione che mi dichiari il vincitore
