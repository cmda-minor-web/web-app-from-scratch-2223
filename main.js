// app.js

// Import the displayQuote function from the display.js module
import { displayQuote } from './modules/display.js';

// Add an event listener to the category select element that calls the displayQuote function when the value changes
const categorySelect = document.getElementById("category-select");
categorySelect.addEventListener("change", displayQuote);

// Call the displayQuote function on DOMContentLoaded and when the "New Quote" button is clicked
document.addEventListener('DOMContentLoaded', () => {
  displayQuote();

  const newQuoteButton = document.getElementById('new-quote-btn');
  newQuoteButton.addEventListener('click', () => {
    displayQuote();
  });
});