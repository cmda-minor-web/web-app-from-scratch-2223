// Wait for the DOM to load before executing the code inside the callback function
document.addEventListener('DOMContentLoaded', () => {
  
  // Get references to the HTML elements we'll be updating
  const quoteElement = document.getElementById("quote");
  const authorElement = document.getElementById("author");
  const newQuoteButton = document.getElementById('new-quote-btn');

  // Define an async function for fetching data from the API
  async function fetchData(maxChars) {
    // Set the category and URL for the API request
    const category = 'happiness';
    const url = `https://api.api-ninjas.com/v1/quotes?category=${category}&limit=10`;

    try {
      // Make the API request with the specified headers and URL
      const response = await fetch(url, {
        headers: {'X-Api-Key': '3JwHEP75fl/aHhG67dLS/A==j8eWwZLo3eujm2mP'}
      });

      // If the response is not successful, throw an error
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Parse the response as JSON
      const data = await response.json();

      // Filter the data to include only quotes with maxChars or fewer characters
      const filteredData = data.filter(quote => quote.quote.length <= maxChars);

      // Return the filtered data
      return filteredData;
    } catch (error) {
      // If there's an error, log it to the console
      console.error('Error fetching data:', error);
    }
  }

  // Define a function for displaying a quote
  function displayQuote() {
    // Call the fetchData function with a maxChars argument of 80 and use the returned data
    fetchData(80).then(data => {
      // Choose a random quote from the data array
      const randomQuote = data[Math.floor(Math.random() * data.length)];
      
      // Fade out the quote and author elements
      quoteElement.style.opacity = 0;
      authorElement.style.opacity = 0;

      // After a delay of 1000ms (1 second), update the quote and author elements with the new quote and author, and fade them back in
      setTimeout(() => {
        quoteElement.textContent = `"${randomQuote.quote}"`;
        authorElement.textContent = `- ${randomQuote.author}`;
        quoteElement.style.opacity = 1;
        authorElement.style.opacity = 1;
      }, 1000);
    });
  }

  // Call the displayQuote function to show a quote when the page loads
  displayQuote();

  // Add an event listener to the "New Quote" button that calls the displayQuote function when clicked
  newQuoteButton.addEventListener('click', () => {
    displayQuote();
  });
});
