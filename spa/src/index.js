import {getKey} from './api.js';

const inputField = document.getElementById("summonerName");
const key = getKey();

//Version 1 using robberts way of coding
async function fetchSummoner(username) {
    let response = await fetch(`https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${username}?api_key=${key}`)
    const summoner = await response.json();

    console.log(summoner);

    return summoner
}
inputField.addEventListener("change", async () => {
    const username = inputField.value;
    const summoner = await fetchSummoner(username);

    // Select the <p> element within the "welcome-header" <div>
    const summonerNameElement = document.getElementById("welcomeMsg");

    // Set the text content of the <p> element to the summoner's name
    summonerNameElement.textContent = summoner.name;
});


fetchSummoner()