//todo isn't it smarter to convert all these html id's to components maybe this will get messy otherwise..

//API-Key start
import {getKey} from './api.js';
const key = getKey();
//API-Key end


const inputField = document.getElementById("summonerName");
const button = document.querySelector(".champions-mastery");
const cardHeader = document.querySelector(".card-header");
const cardContent = document.querySelector(".card-content");


//Returns a summoner object with relevant data
async function fetchSummoner(summonerName) {
    //todo funny bug javascript automatically asigns the word "undefined" to the url, but undefined is a summoner name lol
    let response = await fetch(`https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${key}`)
    const summoner = await response.json();

    console.log(summoner);

    return summoner
}

async function fetchMasteryBySummonerId(summonerId) {
    let response = await fetch(`https://euw1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/${summonerId}?api_key=${key}`)
    const summonerMastery = await response.json()
    console.log(summonerMastery)
    return summonerMastery
}

//todo name changes because this is getting messy already

async function displaySearch() {
    inputField.addEventListener("change", async () => {
        const username = inputField.value;

        const summoner = await fetchSummoner(username);

        // select the <p> element within the "welcome-header" <div>
        const summonerNameElement = document.getElementById("welcomeMsg");
        const summonerLevel = document.getElementById("summonerLevel");
        // set the text content of the <p> element to the summoner's name and level
        summonerNameElement.textContent = summoner.name;
        summonerLevel.textContent = summoner.summonerLevel;

    });
}

// Displays the summoner name and level in the welcome message and fetches the corresponding mastery data when the "champions-mastery" button is clicked
async function displayData() {
    displaySearch()

    button.addEventListener('click', async () => {
        const username = inputField.value;
        const summoner = await fetchSummoner(username);
        const summonerId = summoner.id;
        const summonerMastery = await fetchMasteryBySummonerId(summonerId);

        // Clear any existing content in the card
        cardHeader.innerHTML = "";
        cardContent.innerHTML = "";

        for (let i = 0; i < 10; i++) {
            // const championName = summonerMastery[i].championName;
            const championLevel = summonerMastery[i].championLevel;
            const championPoints = summonerMastery[i].championPoints;

            // Create HTML elements to display the mastery data
            // const h3 = document.createElement("h3");
            const p1 = document.createElement("p");
            const p2 = document.createElement("p");

            //todo fetch champions to display names with key and value
            // const champImg = document.createElement('img');
            // champImg.src = `https://ddragon.leagueoflegends.com/cdn/11.20.1/img/champion/${siuu}.png`;
            //end

            // Set the text content of the HTML elements to the mastery data
            // h3.textContent = championName;
            p1.textContent = `Champion Level: ${championLevel}`;
            p2.textContent = `Champion Points: ${championPoints}`;

            // Add the HTML elements to the card
            // cardHeader.appendChild(h3);
            cardContent.appendChild(p1);
            cardContent.appendChild(p2);
        }

    });
}

displayData()







