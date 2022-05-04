const cards = document.querySelectorAll(".card");
const dropzones = document.querySelectorAll(".dropZone");

cards.forEach((card) => {
  card.addEventListener("dragstart", dragstart);
  card.addEventListener("drag", drag);
  card.addEventListener("dragend", dragend);
});

function dragstart() {
  // console.log("dragstart");
  dropzones.forEach((dropzone) => {
    dropzone.classList.add("dragstart");
  });
}

function drag() {
  // console.log("drag");
}

function dragend() {
  // console.log("dragend");
  dropzones.forEach((dropzone) => dropzone.classList.remove("dragstart"));
}

// contenteditable="true"
// FAZER FUNÇÃO QUE AO CLICAR NO RETANGULO O TEXTO FICA EDITAVEL

dropzones.forEach((dropzone) => {
  dropzone.addEventListener("dragenter", dragenter);
  dropzone.addEventListener("dragover", dragover);
  dropzone.addEventListener("dragleave", dragleave);
  dropzone.addEventListener("drop", drop);
});

function dragenter() {
  // console.log("Entrou");
}

function dragover() {
  // console.log("Estou");
}

function dragleave() {
  // console.log("Saí");
}

function drop() {
  // console.log("Soltei");
}
