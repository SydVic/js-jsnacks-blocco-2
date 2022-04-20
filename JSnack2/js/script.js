// lista di nomi e cognomi
const randomName = ["Luca", "Matteo", "Nicola","Zefiro", "Sara", "Vitantonio", "Karolina"];
const randomSurname = ["Corona", "Slima", "Maino","Messineo", "Bodasca", "Bianchi", "Mastrantonio"];

// lista invitati casuali
let randomGuest = "";
const randomGuestList = [];

// genero i nomi casuali degli invitati
for (let i = 0; i < 3; i++) {
    randomGuest = randomName[Math.floor(Math.random() * (randomName.length))] + " " + randomSurname[Math.floor(Math.random() * (randomName.length))];
    console.log(randomGuest);

    // e li salvo in un array
    randomGuestList.push(randomGuest);
}

console.log(randomGuestList);