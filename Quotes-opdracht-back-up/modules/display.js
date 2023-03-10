// display.js
import { fetchData } from './api.js';

export function displayQuote() {
  const quoteElement = document.getElementById("quote");
  const authorElement = document.getElementById("author");
  quoteElement.classList.add('skeleton');
  authorElement.classList.add('skeleton');

  fetchData(80).then(data => {
    const randomQuote = data[Math.floor(Math.random() * data.length)];

    quoteElement.style.opacity = 0;
    authorElement.style.opacity = 0;

    setTimeout(() => {
      quoteElement.textContent = `"${randomQuote.quote}"`;
      authorElement.textContent = `- ${randomQuote.author}`;
      quoteElement.style.opacity = 1;
      authorElement.style.opacity = 1;
    }, 1000);
  });
  


  
}
