// chiedo all'utente di inserire un numero per 5 volte
// e li sommo tra di loro
let userNumbersSum = 0;

for (let i = 1; i <= 5; i++) {
    const userNumber = parseInt(prompt("Dimmi un numero"));
    console.log("userNumber",i, userNumber);

    userNumbersSum += userNumber;   
}

console.log(userNumbersSum);
