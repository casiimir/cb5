const emptyArr = [];
const numsArr = [2, 9, 4, 5, 10, 1];
// const numsArr = [2, 9, , 5, 10, 1];
const charsArr = ["2", "9", "4", "5", "10", "1"];
const mixArr = [200, "edgemony", true, 1, 20.444, undefined];

// console.log(numsArr[numsArr.length - 1]); // Accesso per index
// console.log(numsArr.length); // get numsArr length

numsArr.push(); // Aggiunge in coda alla lista
numsArr.pop(); // Rimuove in coda alla lista
numsArr.shift(); // Rimuove in cima alla lista
numsArr.unshift(); // Aggiunge in cima alla lista
numsArr.splice(); // Aggiunge e rimuove n valori
numsArr.slice(); // Fragmenta un array e ne ritorna la sez.
numsArr.concat(); // concatena due o più array

numsArr.length; // Ritorna lunghezza dell'array
numsArr.indexOf(); // Ritorna l'indice di un terminato valore, se assente -1
numsArr.lastIndexOf(); // Identico a indexOf() ma esegue la ricerca da dx verso sx
numsArr.includes(); // Ritorna true se l'elemento è presente
numsArr.reverse(); // Inverte ordine degli elementi
numsArr.join(); // Trasforma un array in stringa, il separatore ne assegna il modello di separaz.

// ARRAY MULTIDIMENSIONALI

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// matrix[0] => [1, 2, 3]
// matrix[0][2] => 3

// CLICLI FOR
// console.log("1: Casi");
// console.log("2: Casi");
// console.log("3: Casi");
// console.log("4: Casi");
// console.log("5: Casi");
// console.log("n: Casi");

// SINTASSI:  for(INIZIALIZZAZIONE/VALORE; CONDIZIONE; MODIFICA)

// n = n + 1    identico a    n += 1     identico a    n++
// for (let n = 0; n <= 100; n++) {
//   console.log(n + ": Casi");
// }

let fruits = ["🍎", "🍐", "🍉", "🍑"];

// for (let i = 0; i <= fruits.length - 1; i++) {
//   // console.log("Elemento " + i + " : " + fruits[i]);
//   switch (fruits[i]) {
//     case "🍎":
//       console.log("Questa è una mela, infatti: ", fruits[i]);
//       break;
//     case "🍐":
//       console.log("Questa è una pera, infatti: ", fruits[i]);
//       break;
//     case "🍉":
//       console.log("Questo è anguria, infatti: ", fruits[i]);
//       break;
//     case "🍑":
//       console.log("Questa è una pesca, infatti: ", fruits[i]);
//       break;
//     default:
//       console.log("Il frutto non è stato trovato");
//   }
// }

// FORMA ABBREVIATA CHE PESCA GLI INDICI DELL'ARRAY
for (index in fruits) {
  console.log(index);
}
// forma abbrevia di, vedi sopra
// for (let i = 0; i <= fruits.length - 1; i++) {
//   console.log(i);
// }

// FORMA ABBREVIATA CHE PESCA I VALORI DELL'ARRAY
for (item of fruits) {
  console.log(item);
}
// forma abbrevia di, vedi sopra
// for (let i = 0; i <= fruits.length - 1; i++) {
//   console.log(fruits[i]);
// }

let marketIndex = [];

for (let i = 0; i <= 20; i++) {
  marketIndex.push("#" + i + ": ");
}

let str = "";

for (let i = 0; i <= 6; i++) {
  str += "#";
  console.log(str);
}

for (let i = 0; i <= matrix.length - 1; i++) {
  for (let j = 0; j <= matrix[i].length - 1; j++) {
    console.log(matrix[i][j]);
  }
}
