const person = {
  name: "Mario",
  surname: "Super",
  skill: function () {
    console.log("Yuupii");
  },
};

function sum(...args) {
  let total = 0;

  for (arg of args) {
    total += arg;
  }

  console.log(total);
  return total;
}

let first = "first";

function functionalScope() {
  let second = "second";
  console.log("Dentro la funzione: ", first);
  console.log("Dentro la funzione: ", second);
  // console.log(third);  // ERROR - siamo fuori scope

  function subFunction() {
    let third = "third";
    console.log("Dentro la sub function", first);
    console.log("Dentro la sub function", second);
  }

  subFunction();
}

// functionalScope();

// console.log("Fuori la funzione: ", first);
// console.log("Fuori la funzione: ", second); // ERROR - fuori scope

// var something = 123;
// let other = 456;

// function run() {
//   something = 998;
//   other = 765;
//   console.log("VAR - fun", something);
//   console.log("LET - fun", other);
// }

// console.log("VAR - scope global", something);
// console.log("LET - scope global", other);

// run();

var something = 123;
let other = 456;

if (true) {
  var somenthing2 = 222;
  let other2 = 333;
}

// console.log(other2); // ERROR - fuori scope, other2 non è definito

function calculator(nNum = 2) {
  let userInput = [];
  let operation = prompt("Inserisci una operazione, es: + - * /");

  for (i = 1; i <= nNum; i++) {
    const parsedPrompt = parseInt(prompt(`Inserisci il ${i}° numero`));
    userInput.push(parsedPrompt);
  }

  switch (operation) {
    case "+":
      let total = 0;
      for (num of userInput) total += num;
      return total;
  }
}

// RANDOM WORD FUNCTION
function getRandomWord() {
  const words = [
    "Olivia",
    "Emma",
    "Charlotte",
    "Amelia",
    "Ava",
    "Sophia",
    "Isabella",
    "Mia",
    "Evelyn",
    "Harper",
    "Luna",
    "Camila",
    "Gianna",
    "Elizabeth",
    "Eleanor",
    "Ella",
    "Abigail",
    "Sofia",
    "Avery",
    "Scarlett",
  ];
  const randNum = Math.floor(Math.random() * (words.length - 1));

  console.log(randNum, words[randNum]);
}
