// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.




//chiedo all'user di inserire un numero e di scegliere tra pari e dispari
const numeroUser = prompt('inserisci un numero da 1 a 5');
const sceltaUser = prompt('scegli tra pari e dispari');


//creo una funzione che mi generi un numero randomico
function numRandom() {
    const randomNum = Math.floor(Math.random() * 5) + 1;
    return randomNum;
}


//creo una variabile che mi prenda il numero uscito dalla funzione e lo stampi
let consoleNumero = numRandom();
console.log('il numero generato randomicamente dalla console è:', consoleNumero);