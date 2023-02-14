console.log("Hello");

fetch('https://quote.api.fdnd.nl/v1/quotes')
.then((response) => response.json())
.then((data) => {
    console.log(data)
})