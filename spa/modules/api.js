import { loading, hideLoading } from "./render.js";
import { setData } from "./render.js";
import { errorHandler } from "./error.js";

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

            setData(counter);
        })
        .catch((error) => {
            errorHandler();
        });
}