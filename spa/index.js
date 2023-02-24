const title = document.querySelector("h2");
const bio = document.querySelector("p");
const quote = document.querySelector("q");
const id = document.querySelector("span > span")
// const aboutH = document.querySelector("h4")
const random = document.querySelector("button:nth-of-type(1)");
const next = document.querySelector("button:nth-of-type(2)");
const loaderH = document.querySelector("section:nth-of-type(3) h2")
const url = "https://opensheet.elk.sh/1p7Wnace8KpaIFnATpBcil_KyJ4P8IC8vYIUO8NCfcKc/Quotes";
let info;
let counter = 0;

const loader = document.querySelector(".loading");

//window.onload = async () => {
    fetchData();
//};

window.addEventListener("hashchange", onRouteChanged);

random.addEventListener("click", randomSelector);
next.addEventListener("click", nextSelector);

//done
function fetchData() {
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
            // make a function
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

function randomSelector() {
    let counterRandom = Math.floor(Math.random() * info.length);

    // make function
    title.innerHTML = info[counterRandom].author;
    bio.innerHTML = info[counterRandom].bio;
    quote.innerHTML = info[counterRandom].quote;
    id.innerHTML = info[counterRandom].id;
}

function about() {
    const aboutH = document.querySelector("h4")

    for (let i = 0; i < info.length; i++) {
        if (info[i].author == 'Vona Magdalena') {
            aboutH.innerHTML = info[i].quote;
        }
    }
}
// make loading and hideLoading one function and use state
//done
function loading() {
    loader.classList.add("display");
}

//done
function hideLoading() {
    loader.classList.remove("display");
    // setTimeout(() => {
    //     loader.classList.remove("display");
    // }, 1000);
}

//done
function onRouteChanged() {
    const hash = window.location.hash;

    const routerView = document.getElementById("router-view");

    if (!(routerView instanceof HTMLElement)) {
        throw new ReferenceError("No router view element available for rendering");
    }

    switch (hash) {
        case '#about':
            // make a function
            routerView.innerHTML = `<section id="about">
                                        <div class="title-box">
                                            <h3>About</h3>
                                            <hr/>
                                        </div>
                                        <h4></h4>
                                        <footer>
                                            <span>© 2023 Creator of The Quotes Room</span>
                                        </footer>
                                    </section>`;
            about();
            break;
        case "#home":
            // make function
            window.location = "index.html"
            break;
        default:
            //make function
            routerView.innerHTML = "<h1>404 - Page Not Found</h1>";
            break;
    }
}