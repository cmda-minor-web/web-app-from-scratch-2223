import { info } from "./api.js";
import { setData } from "./render.js";

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

export function randomSelector() {
    let counterRandom = Math.floor(Math.random() * info.length);

    setData(counterRandom);
}