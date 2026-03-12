//DOM MANIPULATION

// GetElementById()
// const title = document.getElementById("text");
// console.log(title);

// GetElementByClassName()
// const listItem = document.getElementsByClassName("list-items");
// console.log(listItem);

// GetElementByTagName()
// const listItem = document.getElementsByTagName("li");
// console.log(listItem);

// querySelector()
// selects the first item that matches the selector it's given
// const container = document.querySelector(".container");
// console.log(container);

// querySelectorAll()
// selects all items that match the selector

// STYLING ELEMENTS
// const title = document.querySelector("#movie-header");

// title.style.color = "black";
// this type of styling above is inline-styling, it cannot work when selecting more than one element. You would have to loop to select each of the items
// Example below

// const listItems = document.querySelectorAll(".list-items");

// for (let i = 0; i < listItems.length; i++) {
//   listItems[i].style.color = "red";
// }

// CREATING ELEMENTS
const ul = document.querySelector("ul");
const li = document.createElement("li");

// Adding Elements
ul.append(li);

// Modifying the text
// (.innerText) - just shows text
// (.textContent) -  shows indentations
// (.innerHTML) -  not usually used due to security issues, but displays the html tags present in the node
li.innerText = "X-men";

// Modifying Attributes and Classes
li.setAttribute("id", "movie-header");
li.removeAttribute("id");

const title = document.querySelector("#movie-header");
console.log(title.getAttribute("id"));

li.classList.add("list-items");
li.classList.remove("list-items");

// to check if it contains a class
console.log(li.classList.contains("list-items"));

// Remove Elements
li.remove();

// TRAVERSING THE DOM
// Parent Node Traversal
console.log(ul.parentNode); //selects the parent node above it
console.log(ul.parentElement); //only selects the element above, if the node isn't an element it woould return null
console.log(ul.parentElement.parentElement);

const html = document.documentElement;
console.log(html);

// Child Node Traversal
console.log(ul.childNodes); // gives out eleven nodes instead of just 5 because indentations also count as nodes
console.log(ul.firstChild);
console.log(ul.lastChild); //they just select the text node

// ul.childNodes[1].style.backgroundColor = "blue"; //selects the first element and not a node

console.log(ul.children);
console.log(ul.firstElementChild);
console.log(ul.lastElementChild);

// Sibling Node Traversal
console.log(ul.previousSibling);
console.log(ul.nextSibling);

console.log(ul.previousElementSibling);
