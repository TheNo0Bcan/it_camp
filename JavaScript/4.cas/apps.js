// Za interakciju sa korisnikomse koristi poseban metod imena prompt()

const ime = prompt("Unesite vase ime: ")
console.log(ime);
let brojGodina = prompt("Unesite broj godina: ")
console.log(brojGodina);
console.log(typeof brojGodina);
// neki string mozemo prevesti u number na sledeca dva nacina
//  1. Nacin
brojGodina = +brojGodina // preko oznake + ce se izvrsiti konverzija u number tip podatka
console.log(brojGodina);
console.log(typeof brojGodina);
//  2. Nacin
brojGodina = Number(brojGodina);
console.log(typeof brojGodina);

brojGodina = Number(prompt("Unesite broj godina:"));
console.log(brojGodina)

