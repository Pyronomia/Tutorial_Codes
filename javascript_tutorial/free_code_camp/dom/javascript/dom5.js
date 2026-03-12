// DOM MANIPULATION

// Event Delegation

// It allows users to append a SINGLE event listener to a parent element that adds it to all of its present AND future descendants that match a selector

document.querySelector(".sports").addEventListener("click", function (e) {
  if (e.target.matches("li")) {
    console.log(e.target.textContent + " is clicked");

    e.target.style.backgroundColor = "lightGrey";
  }
});

let sportsArray = ["Rugby", "Baseball", "Cricket"];
const sports = document.querySelector(".sports");
const addBtn = document.querySelector(".add-btn");

addBtn.addEventListener("click", function () {
  if (sportsArray == "") {
    return alert("No more sports to add");
  }
  const newSport = document.createElement("li");
  newSport.classList.add("sport");

  newSport.textContent =
    sportsArray[Math.floor(Math.random() * sportsArray.length)];

  const index = sportsArray.indexOf(newSport.textContent);

  sportsArray.splice(index, 1);

  sports.append(newSport);
});
