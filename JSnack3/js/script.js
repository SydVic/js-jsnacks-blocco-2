// chiedo all'utente un numero
const userNumber = parseInt(prompt("Dimmi un numero"));
console.log(userNumber, typeof(userNumber));

// ciclo for per calcolare i cubi
for ( let i = 1; i <= userNumber; i++ ) {
    const userCube = i ** 3;
    console.log(userCube, typeof(userCube));
}


/*
let userNumber = 0;

// controllo che ciò che viene inserito sia un numero
do {
    userNumber = parseInt(prompt("Dimmi un numero"));
    console.log(userNumber, typeof(userNumber));
} while (isNaN(userNumber));

// ciclo for per calcolare i cubi
for ( let i = 1; i <= userNumber; i++ ) {
    const userCube = i ** 3;
    console.log(userCube, typeof(userCube));
}
*/