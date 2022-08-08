// var
// Redeklarisanje (ponvono deklarisanje neke promenljive) je dozvoljeno bilo gde u programu

var x = 14;
console.log(x);
console.log("neki string");
var x = 16;
console.log(x);


// let 
// Redeklaracija (ponovno deklarisanje neke promenljive) za let nije dozvoljena, ako govorimo
// o istom prostoru na kom je izvrsena prva deklaracija.

let y = 10;
console.log(y);
// let y = 19; Nece bit dozvoljeno!

// Black scope (prostor) nam obezbedjuju let i const keywords:

{
    // console.log(y);  Nece izvrsiri y jer u block scope nije poznata prethodna deklaracija promenljive
    let y = 19;
    console.log(y);
}

console.log(y);

// let nam ne dozvoljava redeklaraciju (ako smo u istom prostoru).
// ali je moguce izvrsiti reinicijaciju (dodeljivanje druge vrednosti).

let z = 10;
z = 12;

// const
// promenljive koje su deifinisane pomocu const
// NE MOGU BITI NI REDEKLERISANE NI REINICIJALIZOVANE.

const w = 16;
// const w = 14; Ne moze se redeklarisati
console.log(w);
// w = 20; nije moguce izvrsiti reinicalizaciju.
console.log(w);


// karakteristike koje vaze za let kod block scope_a vaze i za promenljive definisane putem const.

// let dozvoljava sledece:
let prom;
prom = 40;

// const je striktna i kod nje se mora odjednom izvrsiti deklaracija i inicalizacija.

const prom2 = 50;

// const ne dozvoljava reinicalizaciju (ponovno dodeljivanje vrednosti). 
// Medjutim mozemo izvrsiti neke izmene kada se radi o nizu ii objektu
// (izmene u smislu da se promeni vrednost tog elementa, da se doda element....)

