// Variables

let btn = document.querySelector("#new-quote");
let quote = document.querySelector(".quote");
let person = document.querySelector(".person");

const quotes = [
  {
    quote:
      "The only limit to our realization of tomorrow is our doubts of today.",
    person: "Franklin D. Roosevelt",
  },
  {
    quote: "In the middle of every difficulty lies opportunity.",
    person: "Albert Einstein",
  },
  {
    quote:
      "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    person: "Winston Churchill",
  },
  {
    quote: "Be yourself; everyone else is already taken.",
    person: "Oscar Wilde",
  },
  {
    quote:
      "Do not go where the path may lead, go instead where there is no path and leave a trail.",
    person: "Ralph Waldo Emerson",
  },
  {
    quote: "It always seems impossible until it's done.",
    person: "Nelson Mandela",
  },
  {
    quote:
      "Happiness is not something ready made. It comes from your own actions.",
    person: "Dalai Lama",
  },
  {
    quote: "You miss 100% of the shots you don’t take.",
    person: "Wayne Gretzky",
  },
  {
    quote: "The best way to predict the future is to create it.",
    person: "Peter Drucker",
  },
  {
    quote: "Life is what happens when you're busy making other plans.",
    person: "John Lennon",
  },
];

btn.addEventListener("click", function () {
  let random = Math.floor(Math.random() * quotes.length);

  quote.innerText = quotes[random].quote;
  person.innerText = quotes[random].person;
});
