const draggables = document.querySelectorAll(".card");
const containers = document.querySelectorAll(".container");

draggables.forEach((draggable) => {
  draggable.addEventListener("dragstart", () => {
    draggable.classList.add("dragging");

    containers.forEach((container) => {
      container.classList.add("draggingContainer");
    });
  });

  draggable.addEventListener("dragend", () => {
    draggable.classList.remove("dragging");

    containers.forEach((container) => {
      container.classList.remove("draggingContainer");
    });
  });
});

containers.forEach((container) => {
  container.addEventListener("dragover", (event) => {
    event.preventDefault();
    const elementoSeguinte = sortable(container, event.clientY);
    const arrastavel = document.querySelector(".dragging");

    if (elementoSeguinte == null) {
      container.appendChild(arrastavel);
    } else {
      container.insertBefore(arrastavel, elementoSeguinte);
    }
  });
});

function sortable(container, y) {
  const cardsDoContainer = [
    ...container.querySelectorAll(".card:not(.dragging)"),
  ];

  return cardsDoContainer.reduce(
    (cardMaisProximo, card) => {
      const box = card.getBoundingClientRect();
      const posicao = y - box.top - box.height / 2;
      if (posicao < 0 && posicao > cardMaisProximo.offset) {
        return { offset: posicao, element: card };
      } else {
        return cardMaisProximo;
      }
    },
    {
      offset: Number.NEGATIVE_INFINITY,
    }
  ).element;
}

function mudarModo() {
  document.querySelector("html").classList.toggle("darkMode");
}
