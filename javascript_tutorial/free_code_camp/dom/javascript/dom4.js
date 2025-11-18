// DOM MANIPULATION

// EVENT PROBAGATION

// Event Capturing - it moves from the top to the bottom of the DOM tree and it does this when set to true

// Target - the element/node actually being targeted

// Event Bubbling - it moves from the bottom to the top of the DOM tree and it does this when set to false

window.addEventListener(
  "click",
  function () {
    console.log("Window");
  },
  false
);

document.addEventListener(
  "click",
  function () {
    console.log("Document");
  },
  false
);

document.querySelector(".div-2").addEventListener(
  "click",
  function () {
    console.log("DIV 2");
  },
  false
);

document.querySelector(".div-1").addEventListener(
  "click",
  function (e) {
    e.stopPropagation(); //stops from bubbling upwards
    console.log("DIV 1");
  },
  { once: true } // only fires once, after the first click or the first capturing or bubbling event, it stops firing
);

document.querySelector("button").addEventListener(
  "click",
  function (e) {
    // e.preventDefault() it prevents the default action of the element from taking place
    console.log((e.target.innerText = "clicked!"));
  },
  false
);
