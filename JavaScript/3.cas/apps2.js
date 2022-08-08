//        Operatori u JavaScript-u
// Operatori u JavaScript-u se dele na sledece:
//  1. arimeticki operator;
//  2. Operatori dodele vrednosti;
//  3. JavaScript string operatori;
//  4. operatori poredjenja;
//  5. Logicki operatori;
//  6. Tipovni operatori.

//  1. Arimeticki operatori;
//  + Sabiranje:
console.log(5+2);
//  -Oduzimanje:
console.log(5-2);
//   * Mnozenje:
console.log(5**2);
console.log(2**3);
// / Deljenje:
console.log(10/2);
//  % Moduo:
console.log(5 % 2);
console.log(12 % 2);
console.log(13 % 5);
//  ++ Povecanje za 1:
let x = 5;
x++;
console.log(x);

// --Samnjenje za 1:
let y = 5;
y--;
console.log(y);

// 2. Operatori dodele vrednosti;
// = jednakost
let a, b;
a = 10;
b = a;
console.log(a);
console.log(b);

// +=
let c = 15;
c += 5; // c = c + 5
console.log(c);
// -=
var d = 15;
d -= 5;
console.log(d);
// *=
var d = 15;
d *= 5;
console.log(d);
// /=
var d = 15;
d /= 5;
console.log(d);
// %=
var d = 15;
d %= 5;
console.log(d);
// **=
var d = 15;
d **= 5;
console.log(d);

// 3. JavaScript string operatori:
// Za spajanje stringova mozemo koristiti + operator.
// Ako izvrsimo dodavanje stringa nekom broju (broja nekom stringu) preko + operatora dobicemo string.
let m,n;
m = "danas je bilo";
n = "lepo vreme";
console.log(m + " " + n);
console.log(55 + m)

// neke karakteristike vezane za +,-,*,/:
console.log(5 + "5");
console.log(5 - "4");
console.log(5 - "4asd4");  // uvek u slucaju nemogucnosti konvertovanja nekog stringa u broj, JavaScript nam vraca NaN.
console.log(5 * "4");
console.log(5 / "4");

