document.getElementById("paragraf").innerHTML = "Ovo je paragraf od strane JavaScripta";

// Ipsisati u konzoli recenicu : 
console.log("Danas je bilo pretolo. Cekamo septembar za nesto svezije vreme.");

//Tipovi podataka u JS:
// Za proveru tipa varijable u JS (promenljive) se koristi typeof operator
//Postoje:
//   1.  primitivni (Primitive) tipovi podataka;
//   2.  neprimitivni (Non-Primitive) tipovi podataka;

// 1.1 String - niz karaktera koji se upisuje unutar navodnika.
//              On moze biti zapisan unutar obicnih ili duplih navodnika (nije bitno)
//              Strigovi mogu biti bilo koji karakteri A-Z, 0-9
// //    Zapisivanje stringa:
// "Danas je toplo"
// // 'Danas je padala kisa'
// `Danas je padao sneg` // Template litelars
// String("Danas je duvao jak vetar.")


// 1.2 Number - Predstavlja broj u JS. 
//             On moze biti zapisan sa decimalom ili bez nje.
//             JS ne razlikuje tipove kod brojeva, vec su svi brojevi number tipa.
//             Zapisivanje brojeva:
10
0
-78
1.14
0.9999999974563245
Number(45)

// 1.3 BigInt - ovaj tip podatka nam sluzi za skladistenje brojeva cija vrednost prolazi granicu Number tipa podatka.

BigInt(324343240932843284932849994353534543954395435543);

// 1.4 Boolean - Predstavlja logicki entitet i on moze imati 2 vrednosti:7
//               1.True;
//               2.False.
//               Najveca primena ovog tipa podatka se nalazi u konidicionalima, 
//               tj. u slucajevima ispitivanja da li je odredjeni uslov zadaovoljen ili ne

// Boolean("Odredjeni uslov") => kao izlaz dobijamo true ili false

// 1.5 undefined - Kada odredjenu  promenljivu deklarisemo , ali joj ne dodelimo vrednost, 
//                 tada undefined predsavlja i vrednost i tip za tu promenljivu.

// 1.6 null - Tip podatka null se javlja za nepostojecu ili promenljivu koja 
//            nije validna.




// 1.7 Symbol -  to je novi tip podataka u JS.
//               Koristi se za anonimne i jedinstvena vrednosti









