// DOM MANIPULATION

// Reveal Event

const revealBtn = document.querySelector(".reveal-more");

const hiddenContent = document.querySelector(".hidden-content");

function revealContent() {
  if (hiddenContent.classList.contains("boxes")) {
    hiddenContent.classList.remove("boxes");
  } else {
    hiddenContent.classList.add("boxes");
  }
}

revealBtn.addEventListener("click", revealContent);
