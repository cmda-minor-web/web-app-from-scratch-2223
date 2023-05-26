//todo ~validation

import handleSearch from "./handlers/handleSearch.js";
import handleChampions from "./handlers/handleChampions.js";


const inputField = document.getElementById('search-summoner')
const displayTopChampions = document.getElementById('top-6-champions')

inputField.addEventListener("change", handleSearch);
displayTopChampions.addEventListener('click', handleChampions);

async function displayData() {
    console.log('hey')
    await handleSearch()
    console.log('ho')
    await handleChampions()
}

displayData();