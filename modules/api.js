// Fetches data from the API based on the maximum number of characters in a quote and a specified category
export async function fetchData(maxChars, category) {
  const url = `https://api.api-ninjas.com/v1/quotes?category=${category}&limit=10`;

  try {
    const response = await fetch(url, {
      headers: {'X-Api-Key': '3JwHEP75fl/aHhG67dLS/A==j8eWwZLo3eujm2mP'} // Add API key to headers
    });

    const data = await response.json(); // Parse the response data as JSON
    const filteredData = data.filter(quote => quote.quote.length <= maxChars); // Filter the data to only include quotes with less than or equal to the specified maximum number of characters

    if (filteredData.length === 0) { // if quote is equal to 0
      throw new Error('No quotes found'); // throw error
    }

    return filteredData; // Return the filtered data
  } catch (error) {
    console.error('Error fetching data:', error); // Log any errors that occur during the fetch
  }
}
