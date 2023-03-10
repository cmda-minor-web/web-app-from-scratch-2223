// api.js
export async function fetchData(maxChars) {
    const category = 'happiness';
    const url = `https://api.api-ninjas.com/v1/quotes?category=${category}&limit=10`;
  
    try {
      const response = await fetch(url, {
        headers: {'X-Api-Key': '3JwHEP75fl/aHhG67dLS/A==j8eWwZLo3eujm2mP'}
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      const filteredData = data.filter(quote => quote.quote.length <= maxChars);
  
      return filteredData;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  