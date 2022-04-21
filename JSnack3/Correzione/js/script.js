/*
const userLimit = parseInt(prompt("Dimmi il numero fino al quale vuoi calcolare i cubi"));
console.log(userLimit);

let counter = 1;
while ( counter <= userLimit) {
    //const thisCube = counter * counter * counter;
    //const thisCube = counter ** 3;
    const thisCube = Math.pow(counter, 3);
    console.log(thisCube);
    counter++;
}
*/

// CON CONTROLLO
/*
let userLimit;

do {
    userLimit = parseInt(prompt("Dimmi il numero fino al quale vuoi calcolare i cubi"));
} while ( userLimit < 1 || isNaN(userLimit))

for ( let i = 1; i <= userLimit; i++) {
    const thisCube = i ** 3;
    console.log(thisCube);
}
*/

// CON CONTROLLO e ALERT
let userLimit = parseInt(prompt("Dimmi il numero fino al quale vuoi calcolare i cubi"));

while ( userLimit <1 || isNaN(userLimit) ) {
    alert("Il numero è sbagliato");
    userLimit = parseInt(prompt("Dimmi il numero fino al quale vuoi calcolare i cubi"));
}

for ( let i = 1; i <= userLimit; i++) {
    const thisCube = i ** 3;
    console.log(thisCube);
}