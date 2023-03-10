// app.js
import { displayQuote } from './modules/display.js';

document.addEventListener('DOMContentLoaded', () => {
  displayQuote();

  const newQuoteButton = document.getElementById('new-quote-btn');
  newQuoteButton.addEventListener('click', () => {
    displayQuote();
  });
});