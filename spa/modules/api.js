import {loading, hideLoading} from "./render.js";

const title = document.querySelector("h2");
const bio = document.querySelector("p");
const quote = document.querySelector("q");
const id = document.querySelector("span > span");
const url = "https://opensheet.elk.sh/1p7Wnace8KpaIFnATpBcil_KyJ4P8IC8vYIUO8NCfcKc/Quotes";
let counter = 0;

export let info;

export function fetchData(){
    loading();
    fetch(url)
        .then((r) => {
            if (r.status >= 200 && r.status <= 299) {
                return r.json();
            } else {
                throw Error(r.statusText);
            }
        })
        .then((json) => {
            hideLoading();

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