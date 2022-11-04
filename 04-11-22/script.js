const $qs = (el) => document.querySelector(el);

// const closeModalBtnEl = document.querySelector(".close-modal-btn");
const modalEl = $qs(".modal");
const closeModalBtnEl = $qs(".close-modal-btn");
const openModalBtnEl = $qs(".open-modal-btn");
const blockModalBtnEl = $qs(".block-modal-btn");
const ballEl = $qs(".ball");

closeModalBtnEl.addEventListener("click", () => {
  modalEl.style = "opacity: 0;";
  openModalBtnEl.textContent = "Show modal";
  // openModalBtnEl.setAttribute("disabled", "true");
});

openModalBtnEl.addEventListener("click", () => {
  modalEl.style = "opacity: 1;";
  openModalBtnEl.textContent = "Hide modal";
  // openModalBtnEl.setAttribute("disabled", "false");
});

// SET-TIMEOUT & SET-INTERVAL
const showModal = () => (modalEl.style = "opacity: 1;");

// // setTimeout(() => modalEl.style = "opacity: 1;", 2000);

const timeoutShowModal = setTimeout(showModal, 1000);

// const intervalCiaoRagazzi = setInterval(
//   () => console.log("ciao ragazzi"),
//   1000
// );
// // console.log(timeoutShowModal);
// blockModalBtnEl.addEventListener("click", () => {
//   clearTimeout(timeoutShowModal);
//   clearInterval(intervalCiaoRagazzi);
// });

// PROVA SINCRONA

console.log("1. Questo viene prima di tutto");
console.log("2. Questo viene per ultimo");
console.log("------------");

// PROVA E ASICRONA

setTimeout(() => {
  console.log("1. Questo viene prima di tutto");
}, 5000);

// document.body.addEventListener("click", (e) => {
//   console.log(e.clientY);
//   ballEl.style.transform = "translateX(" + e.clientY + "px)";
// });
