//todo isn't it smarter to convert all these html id's to components maybe this will get messy otherwise..

//API-Key start
import {getKey} from './api.js';
const key = getKey();
//API-Key end


const inputField = document.getElementById("summonerName");
const button = document.querySelector(".champions-mastery");
const cardHeader = document.querySelector(".card-header");
const cardContent = document.querySelector(".card-content");

//?Mag dit
let champions = {};


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

async function fetchChampions() {
    const championDataResponse = await fetch('https://ddragon.leagueoflegends.com/cdn/9.19.1/data/en_US/champion.json');
    const championData = await championDataResponse.json();
    console.log(championData)
    return championData
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
        const summonerName = inputField.value;
        const summoner = await fetchSummoner(summonerName);
        const summonerId = summoner.id;
        const summonerMastery = await fetchMasteryBySummonerId(summonerId);

        const championData = await fetchChampions();

        console.log(championData);

        //Thanks maijla? voor het verhelderen van mijn eigen code
        //In baby language, I try to loop through the championsData object.
        Object.keys(championData.data).forEach(key => {
            //Here we could for example say its championsdata etc.266 =
            champions[championData.data[key].key] = championData.data[key].name;
        });

        console.log(champions);

        // const championData = await fetchChampions();
        //Here I clear my existing html
        cardHeader.innerHTML = "";
        cardContent.innerHTML = "";

        //Start the loop so, we loop through our top 10 champions
        for (let i = 0; i < 10; i++) {

            const championId = summonerMastery[i].championId;
            const championLevel = summonerMastery[i].championLevel;
            const championPoints = summonerMastery[i].championPoints;
            const championName = champions[championId];

            // Create HTML elements to display the mastery data
            const h3 = document.createElement("h3");
            const p1 = document.createElement("p");
            const p2 = document.createElement("p");

            //todo fetch champions to display names with key and value in seperate function :O this is ugli

            const champImg = document.createElement('img');
            //Ik ga eerlijk zijn eerste gedeelte van de regex is mine maar daarna copy pasta.. enige namen die dit veroorzaakte waren Kai'sa Bel'Veth Kha'Zix
            //Coole hack btw  [^\w\s] is zelfde als [^a-zA-Z0-9\s]
            const filteredName = championName.replace(/[^a-zA-Z0-9\s]/g, '').replace(/^(...)(.)/, (_, firstThree, fourth) => firstThree + fourth.toLowerCase()).replace(/\s+/g, '');
            champImg.src = `https://ddragon.leagueoflegends.com/cdn/11.20.1/img/champion/${filteredName}.png`;


            // Set the text content of the HTML elements to the mastery data
            h3.textContent = championName;
            p1.textContent = `Champion Level: ${championLevel}`;
            p2.textContent = `Champion Points: ${championPoints}`;

            // Add the HTML elements to the card
            cardContent.appendChild(h3);
            cardContent.appendChild(p1);
            cardContent.appendChild(p2);
            cardContent.appendChild(champImg)
        }

    });
}

displayData()







