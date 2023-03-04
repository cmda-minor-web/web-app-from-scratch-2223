import { fetchData } from "./modules/api.js";
import { onRouteChanged } from "./modules/router.js";
import { randomSelector, nextSelector } from "./modules/ui.js";

const random = document.querySelector("button:nth-of-type(1)");
const next = document.querySelector("button:nth-of-type(2)");

fetchData();

window.addEventListener("hashchange", onRouteChanged);
random.addEventListener("click", randomSelector);
next.addEventListener("click", nextSelector);