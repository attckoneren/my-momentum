const quotes = [
  {
    quote: "How can a mere light tell the depth of the darkness",
    author: "Friedrich Nietzsche",
  },
  {
    quote: "Any number of times is fine.  You terrible life, again!",
    author: "Friedrich Nietzsche",
  },

  {
    quote: "The spirit is elevated by the wound, and new power rises.",
    author: "Friedrich Nietzsche",
  },

  {
    quote: "Rejoice in this life. Live a happy life.",
    author: "Friedrich Nietzsche",
  },
  {
    quote:
      "The beginning of everything is dangerous. But no matter what, If you don't start, nothing will start",
    author: "Friedrich Nietzsche",
  },
  {
    quote:
      "In short, a life without music is a wrong life, a tired life, and a life of dividends.",
    author: "Friedrich Nietzsche",
  },
  {
    quote:
      "There is rather the joy of life in hardship. How monotonous, sailing without waves!",
    author: "Friedrich Nietzsche",
  },
  {
    quote:
      "A superhuman is a person who not only endure the necessary work, but also loves the hardship.",
    author: "Friedrich Nietzsche",
  },
];
const quote = document.querySelector(".quote span:first-child");
const author = document.querySelector(".quote span:last-child");
const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;
