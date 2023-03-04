import { info } from "./api.js";

const loader = document.querySelector(".loading");
const title = document.querySelector("h2");
const bio = document.querySelector("p");
const quote = document.querySelector("q");
const id = document.querySelector("span > span");

export function loading() {
    loader.classList.add("display");
}

export function hideLoading() {
    loader.classList.remove("display");
    // setTimeout(() => {
    //     loader.classList.remove("display");
    // }, 1000);
}

export function setData(index) {
    title.innerHTML = info[index].author;
    bio.innerHTML = info[index].bio;
    quote.innerHTML = info[index].quote;
    id.innerHTML = info[index].id;
}