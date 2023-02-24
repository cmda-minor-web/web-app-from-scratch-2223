const apiUrl = 'https://quotes.fdnd.nl/api/v1/quotes'
async function getData() {
const response = await fetch(apiUrl);
const data = await response.json();
document.querySelector("#quote").href = data.quotes.text;
document.getElementById('quote').textContent = data.quotes.text;
}
getData();



// const apiUrl = 'https://quotes.fdnd.nl/api/v1/quotes';

// async function getData() {
//   try {
//     const response = await fetch(apiUrl);
//     const data = await response.json();
//     document.getElementById('name').textContent = data.quotes[0].text;
//   } catch (error) {
//     console.error(error);
//   }
// }

// getData();

