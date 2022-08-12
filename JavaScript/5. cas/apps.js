// Kondicionali
// U JavaScript-u if naredba se pise na sledeci nacin:

// if (uslov1) {
//     // Ako je ispunjen uslov1 izvsiti odredjeni kod
// } else if (uslov2) {
//     // Ako je ispunjen uslov2 izvrsiti odredjeni kod
// } else {
//     // U slucaju da nije zadovoljen ni oriv ni drugi uslov, izvrsiti odredjeni kod
// }

// Na osnovu unetih godina ispisati u konzoli sledece:
// ako je broj godina manji od 12: Vi ste decijeg doba
// ako je broj godina izmedju 12(ukljucuje) i 18(ne ukljcuje): Vi st maloletni
// ako je broj godina 18(ukljucuje) i 40(ne ukljucuje): Vi ste punoletni
// ako je broj godina veci ili jednak 40: Vi ste zrela osoba
// ako korisnik nije uneo broj: Niste uneli broj godina.
const brojGodina = Number(prompt("Unesite svoju starost: "))

if (brojGodina < 12) {
    console.log("Vi ste decijeg doba.")
} else if (brojGodina >= 12, brojGodina < 18) {
    console.log("Vi ste maloletni.")
} else if (brojGodina >= 18,brojGodina < 40) {
    console.log("Vi ste punoletni.")
} else if (brojGodina >= 40) {
    console.log("Vi ste zrela osoba.")
} else {
    console.log("Niste uneli broj godina.");
}

// const brojGodina = Number(prompt("Unesite svoju starost: "))

// if (brojGodina < 12) {
//     console.log("Vi ste decijeg doba")
// } else if (brojGodina >= 12 && brojGodina < 18) {
//     console.log("Vi ste maloletni")
// } else if (brojGodina >= 18 && brojGodina < 40) {
//     console.log("Vi ste punoletni")
// } else if (brojGodina >= 40) {
//     console.log("Vi ste zrela osoba")
// } else {
//     console.log("Niste uneli broj godina");
// }


// uslov za parnost broja je sledeci:
// broj % 2 === 0 broj je paran
// broj % 2 !== 0 broj je neparan

// napisati program koji proverava da li je uneti broj od strane korisnika paran ili neparan i ispisuje odgovarajucu poruku
// i ispisuje odgovarajucu poruku. 
const broj = Number (prompt("Unesite broj: "))
if (broj % 2 === 0) {
    console.log("Broj koji ste uneli je paran");
} else if (broj % 2 === 1) {
    console.log("Broj koji ste uneli nije paran.");
} else {
    console.log("Niste uneli odgovarajuc element.");
}

// napisati program koji, ako je uneti broj vecu od nula stampa poruku broj je pozitivan , u suprotnom broj je negativan
const nekiBroj = Number (prompt("Unesite broj: "))
if (nekiBroj > 0) {
    console.log("Uneli ste pozitivan broj.")
} else if (nekiBroj < 0) {
    console.log("Uneli ste negativan broj.")
} else if (nekiBroj === 0) {
    console.log("Uneli ste nulu")
} else {
    console.log("Niste uneli broj.")
}
// Switch naredba: 
// switch (izraz) {
//     case x:
//         // blok koda
//         break;
//     case y:
//         //blok koda
//         break;
//     case z:
//         //blok koda
//         break;
//     default:
//         // blok koda
// }
// Ako je zadovoljen slucaj x, izvrsice se 66. linija koda,
// ako nije, prelazimo na sledeci slucaj...
// Kad se dodje do break rezervisane reci  switch naredba prestaje da se izvrsava .
// Ako se izostavi break to znaci da ce se izvrsiti linija koda od sledeceg slucaja 
// (koji zapreavo nije zadovoljen ) i to nije nesto sto zelimo da se desi.
// Default rezervisana rec odredjuje kod koji ce se izvrsiti ako nijedan od presthodnih slucajeva nije zadovoljen

// korisnik unosi broj koji mora biti izmedju 12 i 15 (ukljucuju se oba)
// koristeci switch naredbu izvrsiti ispis u konzoli broj koji je korisnik uneo pod
// zadovoljenm uslovom

const broj1 = Number(prompt("Unesite broj izmedju 12 i 15: "))

switch(broj1) {
    case 12: 
        console.log(broj1)
        break
    case 13:
        console.log(broj1)
        break
    case 14:
        console.log(broj1)
        break
    case 15:
        console.log(broj1)
        break
    default:
        console.log("niste uneli broj iz trazenog opsega")
}

// Napisatiprogram koji naosnovu dva uneta broja od strane korisnika ispisuje:
// Povrsina kvadrata ako su uneti jednaki brojevi,
// povrsina pravouganika ako su uneti brojevi razliciti

// 2. zadatak 
// korisnik unosi dva realna broja x i y.
// Napisati program koji izracunava i stmpa 
// kolicnik x/y, ako je broj y razilcit od nule,
// a inace ispisuje poruku: Deljenje nemoguce