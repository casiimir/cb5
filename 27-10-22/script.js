// 1. DEFINIZIONE DI UNA FUNZIONE
function sub(num1, num2) {
  // (num1, num2)Parametri
  console.log("La sottrazione tra", num1, "e", num2, "è uguale a: ");
  return num1 - num2;
}

// 2. INVOCAZIONE DI UNA FUNZIONE
// let result = sub(50, 10);   // (50, 10) Argomenti che rimpiazzeranno num1, num2
// console.log(result);

// -------------------------

// function sum(a, b, c) {
//   return `La somma tra ${a}, ${b} e ${c} = ${a + b + c}`;
// }

// const firstValue = sum(2, 3, 5);

// console.log(firstValue);
// console.log(sum(22, 123, 135));

// console.log("Somma tra ", 5, "e", 6, "e", 90, "=", 5 + 6 + 90);
// console.log("Somma tra ", 14, "e", 2, "=", 14 + 2);
// console.log("Somma tra ", 50, "e", 18, "=", 50 + 18);
// console.log("Somma tra ", 25, "e", 2, "=", 25 + 2);
// console.log("Somma tra ", 90, "e", 7, "=", 90 + 7);

// Implementazione con array
function sum(numbers, name) {
  let totalSum = 0;

  for (num of numbers) {
    totalSum += num;
  }

  console.log("Ciao", name, "ecco il tuo risultato");
  return totalSum;
}

const userName = "Casi";
let sumResult1 = sum([20, 31, 52], userName);

// console.log(sumResult1);

function sum(num1, num2) {
  return num1 + num2;
}
function sub(num1, num2) {
  return num1 - num2;
}
function mult(num1, num2) {
  return num1 * num2;
}
function div(num1, num2) {
  return num1 / num2;
}

// Parametro opzionale => operation = "+"
function calculator(x, y, operation = "+") {
  switch (operation) {
    case "+":
      return num1 + num2;
    case "-":
      return sub(x, y); // CASO IN CUI SI RICHIAMA UNA FUNZIONE DENTRO UN'ALTRA
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
  }
}

// console.log(calculator(2, 5, "*"));

// OBJECTS

// SINTASSI { ... } => { CHIAVE: VALORE, ...}
let identificator = "color";

const mineCar = {
  model: "Ferrari", // PROPRIETA`
  year: 2006, // PROPRIETA`
  price: 230000.0, // PROPRIETA`
  color: "scarlat",
  isInProduction: true,
  owners: ["Pippo", "Pluto", "Zio paperone"],
  similar: {
    first: "Lamgorghini",
    second: "Aston Marti",
    third: "Bugatti",
  },
  run: function () {
    console.log("VRUUM VRUUM"); // METODO
  },
};

// ACCESSO TRAMITE CHIAVE AI VALORI
// console.log(mineCar);
// console.log(mineCar.price);
// console.log(mineCar.owners[2]);
// console.log(mineCar.similar.first);

// console.log(mineCar.identificator); // ERROR -> ritorna undefined, la chiave undefined non eiste all'interno dell'oggetto mineCar
// console.log(mineCar[identificator]); // IT WORKS -> preleva la stringa dalla var. identificator, quindi "color"

const mineCarKeys = Object.keys(mineCar); // Ritorna un array delle sole chiavi dell'oggetto
const mineCarValues = Object.values(mineCar); // Ritorna un array dei soli valori dell'oggetto

// Destructuring degli oggetti
// const { model, year, price } = mineCar;
// al posto di:
// const model = mineCar.model;
// const year = mineCar.year;
// const price = mineCar.price;

// Destructuring degli array
// const [a, b, c] = mineCarKeys;
// al posto di:
// const a = mineCarKeys[0];
// const b = mineCarKeys[1];
// const c = mineCarKeys[2];

// MODIFICA DEGLI OGGETTI
// console.log(mineCar);
// modifica di un valore
mineCar.color = "black";
// console.log(mineCar);
// creare una nuova chiave/valore
mineCar.fullOptional = true;
// console.log(mineCar);

// GLI ARRAYS IN REALTA` SONO DEGLI OGGETTI (in javascript)?
// //              0        1          2
// const arr = ["pippo", "pluto", "paperino"];
// const arryObjSim = {
//   0: "pippo",
//   1: "pluto",
//   2: "paperino",
// };

// console.log(arryObjSim);

// RIADATTAZIONE ITALIANA DI CONSOLE e CONSOLE.LOG

const metodiItaliani = {
  stampa: function (arg) {
    console.log(arg);
  },
  benvenuto: function () {
    console.log("Benvenuto in Italia!");
  },
};
