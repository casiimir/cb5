// // RECAP - H.O.F. && Callbacks

// const fruits = [
//   {
//     name: "kiwi",
//     quantity: 4,
//     id: 1,
//   },
//   {
//     name: "ananas",
//     quantity: 2,
//     id: 2,
//   },
//   {
//     name: "apple",
//     quantity: 1,
//     id: 3,
//   },
//   {
//     name: "pear",
//     quantity: 6,
//     id: 4,
//   },
// ];

// // FOR
// console.log("---------------");
// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i].name);
// }

// console.log("---------------");

// // FOREACH - return undefined
// const fruitsForeach = fruits.forEach((fruit) => fruit.name);

// console.log("---------------");

// // MAP - return ['kiwi', 'ananas', 'apple', 'pear']
// const fruitsMap = fruits.map((fruit) => fruit.name);

// console.log("---------------");

// // FILTER - [{...}, {...}] (items w. quantity > 2)
// const fruitsFilter = fruits.filter((fruit) => fruit.quantity > 2);

// // FILTER simulation on for
// let filteredArray = [];

// for (let i = 0; i < fruits.length; i++) {
//   if (fruits[i].quantity > 2) {
//     filteredArray.push(fruits[i]);
//   }
// }

// // DOM & elements
// const bodyEl = document.querySelector("body");
// const cardEl = document.querySelector(".card");
// const cardImgEl = document.querySelector(".card__img");

// console.log(cardEl.children); // Preleva i figli di un det. elemento
// console.log(cardEl.firstChild);
// console.log(cardEl.lastChild);
// console.log(cardEl.classList); // Preleva la lista di tutte le classi dell'elemento
// cardImgEl.remove();            // Rimuove un certo elemento
// cardEl.children[1].remove();  // analogo
// for (let i = 0; i < cardEl.children.length; i++) {  // analogo
//   if (cardEl.children[i].className === "card__img") {
//     cardEl.children[i].remove();
//   }
// }

// // // // / /// // / / // / / // / / // / // / / // / // / / / // / /
// const DOMforEach = (arrayLike) => {
//   let arr = [];
//   for (let i = 0; i < arrayLike.length; i++) {
//     arr.push(arrayLike[i]);
//   }
//   return arr;
// };

// DOMforEach(cardEl.children).map((el) => console.log(el));
// // // // / /// // / / // / / // / / // / // / / // / // / / / // / /

// cardEl.firstElementChild.textContent = "ciaoo ragazzi"; // Modifica il contenuto testuale del primo elemento (h1)

// const bodyEl = document.querySelector("body");

const createCard = (title, imgUrl, description, category, parent) => {
  const cardEl = document.createElement("div");

  cardEl.className = "card";
  if (category === "jewelery") {
    cardEl.classList.add("special-card");
  }

  // title
  const titleEl = document.createElement("h1");
  titleEl.textContent = title;

  // img
  const imgEl = document.createElement("img");
  imgEl.setAttribute("src", imgUrl);
  imgEl.setAttribute("alt", category);

  // paragraph
  const parEl = document.createElement("p");
  parEl.textContent = description;

  cardEl.append(titleEl, imgEl, parEl);
  parent.appendChild(cardEl);
};

// Single card rendering
// createCard(
//   "Hello edgemony",
//   "https://picsum.photos/160/200",
//   "image",
//   "lorem lorem lorem"
// );

// PRODUCTS with map
import products from "./products.js";

// products.map((product) =>
//   createCard(
//     product.title,
//     product.image,
//     product.description,
//     product.category
//   )
// );

// PRODUCTS with filter
// products
//   .filter((product) => product.category === "jewelery")
//   .map((product) =>
//     createCard(
//       product.title,
//       product.image,
//       product.description,
//       product.category
//     )
//   );

const mostpopularEl = document.querySelector(".most-popular");
const bestSellerEl = document.querySelector(".best-seller");

const headerMostPop = document.createElement("h1");
const headerBestSell = document.createElement("h1");

// headerMostPop.style = "color: red; border: 2px solid red;";
headerMostPop.textContent = "Most popular";
headerBestSell.textContent = "Best seller";

mostpopularEl.appendChild(headerMostPop);
bestSellerEl.appendChild(headerBestSell);

products
  .filter((product) => product.price <= 50)
  .map((product) => {
    createCard(
      product.title,
      product.image,
      product.description,
      product.category,
      mostpopularEl
    );
  });

// products
//   .filter((product) => product.price >= 50)
//   .map((product) => {
//     createCard(
//       product.title,
//       product.image,
//       product.description,
//       product.category,
//       bestSellerEl
//     );
//   });
