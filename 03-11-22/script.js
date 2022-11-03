// import {products} from "./products.js";     // nel caso di multiple importazioni
import products from "./products.js";
import mock from "./mock.js";

// products.map((product) => console.log(product));
// mock.map((product) => console.log(product.ultimate.name));

const bodyEl = document.querySelector("body");

// const cardEl = document.createElement("div");
// const cardImgEl = document.createElement("img");
// const cardTitleEl = document.createElement("h1");
// const cardParEl = document.createElement("p");

// cardEl.className = "card";
// cardImgEl.setAttribute("src", "https://picsum.photos/100/100?1");
// cardImgEl.setAttribute("alt", "image");
// cardTitleEl.textContent = "Hello";
// cardParEl.textContent = "Lorem lorem lorem";

// cardEl.append(cardImgEl, cardTitleEl, cardParEl);
// // document.querySelector("body").append(cardEl);  // Identico a sotto solo diretto
// bodyEl.appendChild(cardEl);

const createCard = (data, parent) => {
  const cardEl = document.createElement("div");
  const cardImgEl = document.createElement("img");
  const cardTitleEl = document.createElement("h1");
  const cardParEl = document.createElement("p");

  cardEl.className = "card";
  cardImgEl.setAttribute("src", data.image);
  cardImgEl.setAttribute("alt", data.title);
  cardTitleEl.textContent = data.title;
  cardParEl.textContent = data.description;

  cardEl.append(cardImgEl, cardTitleEl, cardParEl);
  // document.querySelector("body").append(cardEl);  // Identico a sotto solo diretto
  parent.appendChild(cardEl);
};

products.map((product) => createCard(product, bodyEl));

// DOM - EVENTS
// const welcomeMsg = () => alert("Welcome guys");

function welcomeMsg() {
  alert("Welcome guys");
}

const buttonEl = document.querySelector("button");
const cardEl = document.querySelector(".card");
// buttonEl.onclick = welcomeMsg;  // non il miglior scenario

buttonEl.addEventListener("click", () => console.log("ciao"));

// cardEl.addEventListener("click", () => cardEl.classList.add("special-card")); // applica l'evento solo alla prima classe .card

const cardEls = document.querySelectorAll(".card");

cardEls.forEach((card) => {
  card.addEventListener("click", () => card.classList.toggle("special-card"));
});

// cardEls.forEach((card) => {
//   card.addEventListener("click", (e) => {
//     if (e.pageX <= 100) {
//       card.classList.toggle("special-card");
//     }
//   });
// });

const keycodeEl = document.querySelector(".keycode");

// bodyEl.addEventListener(
//   "keydown",
//   (e) => (keycodeEl.textContent = e.key.toUpperCase())
// );

const audio1 = new Audio("1.wav");
const audio2 = new Audio("2.wav");
const audio3 = new Audio("3.wav");
const audio4 = new Audio("4.wav");

bodyEl.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "a":
      audio1.play();
      break;
    case "s":
      audio2.play();
      break;
    case "d":
      audio3.play();
      break;
    case "f":
      audio4.play();
      break;
  }
});
