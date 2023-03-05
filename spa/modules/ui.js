import { info } from "./api.js";
import { setData } from "./render.js";

const input = document.getElementById("search");
let counter = 0;

export function nextSelector() {
    if (counter == (info.length - 1)) {
        counter = 0;

        setData(counter);
    } else {
        counter++;

        setData(counter);
    }
}

export function previousSelector() {
    if (counter == 0) {
        counter = 11;

        setData(counter);
    } else {
        counter--;

        setData(counter);
    }
}

export function randomSelector() {
    let counterRandom = Math.floor(Math.random() * info.length);

    setData(counterRandom);
}

export function findByAuthor() {
    for (let i = 0; i < info.length; i++) {
        if (info[i].author.toLowerCase() !== input.value.toLowerCase()) {
           continue;
        } else {
            console.log("hello");
            setData(i);
        }
    }
}