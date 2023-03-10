// Import the fetchData function from the api.js file
import { fetchData } from './api.js';

// Get the quote and author elements from the DOM
const quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("author");



// Get the category select element from the DOM
const categorySelect = document.getElementById("category-select");

// Get the selected category value from the category select element
const category = categorySelect.value;

// Define a function to display a random quote from the selected category
export function displayQuote() {
  // Add loading class to quote and author elements
  quoteElement.classList.add('loading');
  authorElement.classList.add('loading');

  // Clear the quote and author elements
  quoteElement.innerHTML = '';
  authorElement.innerHTML = '';

  // Call the fetchData function to get a random quote from the selected category
  fetchData(80,category).then(data => {
    const randomQuote = data[Math.floor(Math.random() * data.length)];
    
    // Remove loading class from quote and author elements
    quoteElement.classList.remove('loading');
    authorElement.classList.remove('loading');

    // Update quote and author elements with fetched data
    quoteElement.textContent = randomQuote.quote;
    authorElement.textContent = randomQuote.author;

  });
}
