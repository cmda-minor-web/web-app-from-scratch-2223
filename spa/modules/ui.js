import { info } from "./api.js"

const title = document.querySelector("h2");
const bio = document.querySelector("p");
const quote = document.querySelector("q");
const id = document.querySelector("span > span");
let counter = 0;

export function nextSelector() {
    if (counter == (info.length - 1)) {
        counter = 0;

        // make function
        title.innerHTML = info[counter].author;
        bio.innerHTML = info[counter].bio;
        quote.innerHTML = info[counter].quote;
        id.innerHTML = info[counter].id;
    } else {
        counter++;

        // make function
        title.innerHTML = info[counter].author;
        bio.innerHTML = info[counter].bio;
        quote.innerHTML = info[counter].quote;
        id.innerHTML = info[counter].id;
    }
}

export function randomSelector() {
    let counterRandom = Math.floor(Math.random() * info.length);

    // make function
    title.innerHTML = info[counterRandom].author;
    bio.innerHTML = info[counterRandom].bio;
    quote.innerHTML = info[counterRandom].quote;
    id.innerHTML = info[counterRandom].id;
}