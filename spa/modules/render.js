import { info } from "./api.js";

const loader = document.querySelector(".loading");
const title = document.querySelector("h2");
const bio = document.querySelector("p");
const quote = document.querySelector("q");
const id = document.querySelector("span > span");
export const author = [];

export function loading() {
    loader.classList.add("display");
}

export function hideLoading() {
    loader.classList.remove("display");
}

export function setData(index) {
    title.innerHTML = info[index].author;
    bio.innerHTML = info[index].bio;
    quote.innerHTML = info[index].quote;
    id.innerHTML = info[index].id;
}

export function arrayInsert() {
    for (let i = 0; i < info.length; i++) {
        author.push(info[i].author);
    }

    console.log(author);
}