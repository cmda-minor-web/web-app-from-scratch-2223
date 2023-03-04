import { info } from "./api.js";

function about() {
    const aboutH = document.querySelector("h4")

    for (let i = 0; i < info.length; i++) {
        if (info[i].author == 'Vona Magdalena') {
            aboutH.innerHTML = info[i].quote;
        }
    }
}

export function onRouteChanged() {
    const hash = window.location.hash;

    const routerView = document.getElementById("router-view");

    if (!(routerView instanceof HTMLElement)) {
        throw new ReferenceError("No router view element available for rendering");
    }

    switch (hash) {
        case '#about':
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
            window.location = "index.html"
            break;
        default:
            routerView.innerHTML = "<h1>404 - Page Not Found</h1>";
            break;
    }
}