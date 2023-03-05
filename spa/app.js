import { fetchData } from "./modules/api.js";
import { onRouteChanged } from "./modules/router.js";
import { randomSelector, nextSelector, previousSelector, findByAuthor } from "./modules/ui.js";
import { author, arrayInsert } from "./modules/render.js";

const random = document.querySelector("span button:nth-of-type(1)");
const previous = document.querySelector("span button:nth-of-type(2)")
const next = document.querySelector("span button:nth-of-type(3)");
const submit = document.getElementById("submit");

fetchData();
// arrayInsert();

window.addEventListener("hashchange", onRouteChanged);
random.addEventListener("click", randomSelector);
previous.addEventListener("click", previousSelector);
next.addEventListener("click", nextSelector);
submit.addEventListener("click", findByAuthor);
