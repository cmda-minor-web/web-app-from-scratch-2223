import {loading, hideLoading} from "./modules/render.js"

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