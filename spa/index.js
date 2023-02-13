const article = document.querySelector("section:nth-of-type(1) article p");
const url = "https://quote.api.fdnd.nl/v1/quote"

promiseOfSomeData();


function promiseOfSomeData() {
    fetch(url).then((r) => r.json()).then(data => {
        console.log(data.data[2].text)
        article.innerHTML = data.data[2].text
    });
    
}