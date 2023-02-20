const title = document.querySelector("h3");
const bio = document.querySelector("p");
const quote = document.querySelector("q");
const id = document.querySelector("span > span")
const random = document.querySelector("button:nth-of-type(1)");
const next = document.querySelector("button:nth-of-type(2)");
const url = "https://opensheet.elk.sh/1p7Wnace8KpaIFnATpBcil_KyJ4P8IC8vYIUO8NCfcKc/Quotes";
let info;
let counter = 0;

window.onload = async () => {
    promiseOfSomeData();
    console.log("onload");
};

random.addEventListener("click", randomSelector);
next.addEventListener("click", nextSelector);

function promiseOfSomeData() {
    fetch(url)
        .then((r) => {
            if (r.status >= 200 && r.status <= 299) {
                return r.json();
            } else {
                throw Error(r.statusText);
            }
        })
        .then((json) => {
            info = json;
            title.innerHTML = info[counter].author;
            bio.innerHTML = info[counter].bio;
            quote.innerHTML = info[counter].quote;
            id.innerHTML = info[counter].id;
        })
        .catch((error) => {
            alert(error);
        });
}

function nextSelector() {
    if (counter == (info.length - 1)) {
        counter = 0;

        title.innerHTML = info[counter].author;
        bio.innerHTML = info[counter].bio;
        quote.innerHTML = info[counter].quote;
        id.innerHTML = info[counter].id;
    } else {
        counter++;
        
        title.innerHTML = info[counter].author;
        bio.innerHTML = info[counter].bio;
        quote.innerHTML = info[counter].quote;
        id.innerHTML = info[counter].id;
    }
}

function randomSelector() {
    let counterRandom = Math.floor(Math.random() * info.length);

    title.innerHTML = info[counterRandom].author;
    bio.innerHTML = info[counterRandom].bio;
    quote.innerHTML = info[counterRandom].quote;
    id.innerHTML = info[counterRandom].id;
}