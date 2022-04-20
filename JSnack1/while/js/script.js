// inizializzo la variabile per la somma
let userNumberSum = 0;

// ciclo while con controllo per chiedere 5 numeri all'utente
let i= 0;
while (i < 5) {
    let userNumber = parseInt(prompt(("Dimmi un numero")));
    console.log(userNumber);

    //somma dei 5 numeri e controllo se non è un numero
    if ( !isNaN(userNumber) ) {
        userNumberSum += userNumber;
        i++;
    } else {
        alert("NON E' UN NUMERO!!!!!")
    }
}

console.log(userNumberSum);