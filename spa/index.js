const article = document.querySelector("section:nth-of-type(1) article p");
const url = "https://quotes.fdnd.nl/api/v1/quotes"

promiseOfSomeData();


function promiseOfSomeData() {
    fetch(url).then((r) => r.json()).then(data => {
        console.log(data.data[2].text)
        article.innerHTML = data.data[2].text
    });
    
}