// console.log("Hello world!");
// alert("Ciao ragazzi!");

// let userNum = prompt("Inserisci un numero");
// console.log("Il numero inserito è:", userNum);
let myName = "Casi";
console.log("Direttamente della stringa:", "Casi");
console.log("Della variabile:", myName);

// console.log(myName === "Casi");

// -------- TIPI PRIMITIVI --------
let number = 12345; // tipo number
let string = "Ciao!"; // tipo stringa
let bool = true; // tipo boolean, può essere solo true o false

console.log("Ciao ragazzi oggi 'sembra' non piovere...", number);
// console.log("Ciao ragazzi oggi \"sembra\" non piovere...", number);
console.log(typeof number);

// number = "Ciao, di nuovo";  // riassegnazione di number

console.log(number);

// --------  OPERAZIONI MATEMATICHE --------
console.log("\n---- OPERAZIONI MATEMATICHE ----");
console.log(5 + 5);
console.log(5 - 2);
console.log(9 * 2);
console.log(15 / 3);
console.log(9 % 4); // operatore modulo, ris. 9 / 4 = 2 resto di 1

// --------  TYPEOF di un valore --------
console.log(typeof 123);

// --------  CONVERSIONE da tipo number a tipo string --------
console.log(number.toString());

// --------  CONVERSIONE da tipo string a tipo number --------
console.log(parseInt("90"));

// --------  COSTRUTTO CONDIZIONALE if / else-if / else --------
// let userName = prompt("Ciao! Come ti chiami?");
// let userAge = prompt("Quanti anni hai " + userName + " ?");
// alert(userName + " sei maggiorenne!");
// if (userAge < 18) {
//   alert(
//     "Sei minorenne. Tranquillo, tra " +
//       (18 - userAge) +
//       " diventerai maggiorenne. Al momento non puoi proseguire nel sito"
//   );
//   // window.location = "http://google.com";
// } else if (userAge > 18) {
//   alert("Sei maggiorenne!");
// } else {
//   alert("Hai 18 anni!");
// }

// --------  COSTRUTTO CONDIZIONALE switch --------
// let dayWeekNum = prompt(
//   "Inserisci il giorno della settimana in numero, es: 2 è Martedì"
// );
// let dayWeekNumParsed = parseInt(dayWeekNum);

// switch (dayWeekNumParsed) {
//   case 1:
//     alert("Allora oggi è Lunedì!");
//     break;
//   case 2:
//     alert("Allora oggi è Martedì!");
//     break;
//   case 3:
//     alert("Allora oggi è Mercoledì!");
//     break;
//   case 4:
//     alert("Allora oggi è Giovedì!");
//     break;
//   case 5:
//     alert("Allora oggi è Venerdì!");
//     break;
//   case 6:
//     alert("Allora oggi è Sabato!");
//     break;
//   case 7:
//     alert("Allora oggi è Domenica!");
//     break;
//   default:
//     alert("Questo non è un giorno della settimana valido!");
// }

// --------  COSTRUTTO CONDIZIONALE operatore ternario --------
// IF
let getHour = new Date().getHours();

if (getHour >= 6 && getHour <= 12) {
  console.log("E` mattina");
} else {
  console.log("La mattina è finita");
}

// TERNARIO
getHour >= 6 && getHour <= 12
  ? console.log("E` mattina")
  : console.log("La mattina è finita");
