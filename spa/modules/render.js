const loader = document.querySelector(".loading");

export function loading() {
    loader.classList.add("display");
}

export function hideLoading() {
    loader.classList.remove("display");
    // setTimeout(() => {
    //     loader.classList.remove("display");
    // }, 1000);
}