const title = document.querySelector("h3");
const bio = document.querySelector("p")
const quote = document.querySelector("q")
const url = "https://opensheet.elk.sh/1p7Wnace8KpaIFnATpBcil_KyJ4P8IC8vYIUO8NCfcKc/Quotes"
const button = document.querySelector("button")
let info;
let counter = 0;


window.onload = async () => {
    promiseOfSomeData();
    console.log("onload");
};
button.addEventListener("click", next)

function promiseOfSomeData() {
    fetch(url)
    .then((r) => {
        if (r.status >= 200 && r.status <= 299){
            return r.json();
        }else {
            throw Error(r.statusText);}
    })
    .then((json) => {
        info = json;
        console.log(info)
        console.log(info.length)
        title.innerHTML = info[counter].author;
        bio.innerHTML = info[counter].bio;
        quote.innerHTML = info[counter].quote;
    })
    .catch((error) => {
        console.log(error)
    });
}

function next(){
    console.log("binnen")
    if (counter == info.length){
        counter = 0
    } else {
        counter++
        console.log(counter)
        title.innerHTML = info[counter].author;
        bio.innerHTML = info[counter].bio;
        quote.innerHTML = info[counter].quote;
    }
}