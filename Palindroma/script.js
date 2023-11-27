// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma




// chiedo all'user di inserire una parola
const parolaUser = prompt('inserisci una parola per scoprire se palindroma');
console.log('la parola inserita è:', parolaUser);


//creo una funzione che giri la parola inserita al contrario
function reverse () {
    const parolaContrario = parolaUser.split('').reverse('').join('');
    console.log('la parola inserita ma al contrario è:', parolaContrario);
    return parolaContrario;
    
}


//creo una funzione che mi controlli se la parola inserita e uguale a quella uscita dalla funzione reverse e stampi il risultato
function checkPalindroma(parola1, parola2) {
    if (parola1 === parola2) {
        console.log('è palindroma');
    } else{
        console.log('Non è palindroma');
    }

}

//creo una variabile che prende la parola inserita e la giri con la funzione reverse
let parolaReversata = reverse(parolaUser);


//prendo la variabile che contiene la parola reversata la metto nella funzione che la paragona a quella inserita inzialmente
let parolapalindroma = checkPalindroma(parolaUser, parolaReversata);