//todo isn't it smarter to convert all these html id's to components maybe this will get messy otherwise..
//BIG TODO💀 It sure is getting messy in these functions, need to split them in different directories and export/import them
//API-Key start
import {getKey} from './api.js';

const key = getKey();
//API-Key end


const inputField = document.getElementById("summonerName");
const button = document.querySelector(".champions-mastery");
const cardHeader = document.querySelector(".card-header");
const cardContent = document.querySelector(".card-content");
const tableContent = document.querySelector('.table-content')
const iconSummoner = document.querySelector('.summoner-icon')

//empty champions object that will get filled up later, so we can do something with the champions
let champions = {};



//Returns a summoner object with relevant data
async function fetchSummoner(summonerName) {
    //todo funny bug javascript automatically asigns the word "undefined" to the url, but undefined is a summoner name lol
    const summonerDataResponse = await fetch(`https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${key}`)
    const summoner = await summonerDataResponse.json();

    console.log(summoner);

    return summoner
}

async function fetchMasteryBySummonerId(summonerId) {
    const summonerDataMasteryResponse = await fetch(`https://euw1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/${summonerId}?api_key=${key}`)
    const summonerMastery = await summonerDataMasteryResponse.json()
    console.log(summonerMastery)
    return summonerMastery
}

async function fetchChampions() {
    const championDataResponse = await fetch('https://ddragon.leagueoflegends.com/cdn/9.19.1/data/en_US/champion.json');
    const championData = await championDataResponse.json();
    console.log(championData)
    return championData
}

async function fetchElo(summonerId) {
    const summonerDataEloResponse = await fetch(`https://euw1.api.riotgames.com/lol/league/v4/entries/by-summoner/${summonerId}?api_key=${key}`)
    const summonerElo = await summonerDataEloResponse.json()
    console.log(summonerElo)
    return summonerElo
}



// https://ddragon.leagueoflegends.com/cdn/13.3.1/img/profileicon/5484.png


//todo name changes because this is getting messy already

async function displaySearch() {
    inputField.addEventListener("change", async () => {

        const username = inputField.value;
        const summoner = await fetchSummoner(username);
        const summonerId = summoner.id
        const summonerElo = await fetchElo(summonerId)

        //todo this does not work yet. the error as we always return a string instead of "undefined" (undefined is a summoner tho)
        //todo for now i dont have to loop through the entire array i can simply say i want the first because there are no other summoners
        try {
            // select the <p> element within the "welcome-header" <div>
            const summonerName = document.getElementById("welcomeMsg");
            const summonerLevel = document.getElementById("summonerLevel");
            // set the text content of the <p> element to the summoner's name and level
            summonerName.textContent = summoner.name;
            summonerLevel.textContent = summoner.summonerLevel;

            //clear table end
            tableContent.textContent = '';

            const table = document.createElement("table");
            const headerRow = table.insertRow(0);

            const summonerNameHeader = headerRow.insertCell(0);
            summonerNameHeader.innerHTML = summonerElo[0].summonerName;

            const summonerTierHeader = headerRow.insertCell(1);
            summonerTierHeader.innerHTML = summonerElo[0].tier + ' ' + summonerElo[0].rank;

            const dataRow = table.insertRow(1);

            const lpCell = dataRow.insertCell(0);
            lpCell.innerHTML = `LP: ${summonerElo[0].leaguePoints}`;

            const winsCell = dataRow.insertCell(1);
            winsCell.innerHTML = `Wins: ${summonerElo[0].wins}`;

            const lossesCell = dataRow.insertCell(2);
            lossesCell.innerHTML = `Losses: ${summonerElo[0].losses}`;

            //comment about tables, eigen tabel aanmaken en opvullen inplaats van generaten

            tableContent.appendChild(table);

        } catch (error) {
            const summonerNameError = document.getElementById("errorMsg");
            summonerNameError.textContent = 'This summoner does not exist, maybe a typo?'
        }


    });
}

//Displays the summoner name and level in the welcome message and fetches the corresponding mastery data when the "champions-mastery" button is clicked
async function displayData() {
    //todo This could be mega cleaner instead of dumping all the html here I think
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
        })

        //chatgpt uitleg for above vond het heel mooi namelijk ^

        //This section of the code loops through each key in the championData.data object using the forEach() method, which allows us to perform a function on each item in an array or object.
        //
        // For each key in the object, we assign the value of championData.data[key].name to the champions object with a key of championData.data[key].key. This effectively creates a new object where the keys are the championId values (retrieved from the Riot API) and the values are the corresponding champion names.
        //
        // Here's a breakdown of what's happening in the loop:
        //
        // Object.keys(championData.data) retrieves an array of the keys (champion IDs) in the championData.data object.
        //
        // The forEach() method loops through each key in the array and performs the following function:
        //
        // For each key, championData.data[key].key retrieves the key property (champion ID) of the corresponding object in the championData.data object.
        //
        // championData.data[key].name retrieves the name property (champion name) of the same object.
        //
        // champions[championData.data[key].key] = championData.data[key].name; assigns the championData.data[key].name value to the champions object with a key of championData.data[key].key, effectively creating a new object where the keys are the championId values (retrieved from the Riot API) and the values are the corresponding champion names.

        console.log(champions);
        // const championData = await fetchChampions();
        //Here I clear my existing html
        cardHeader.innerHTML = "";
        cardContent.innerHTML = "";

        const summonerIcon = document.getElementById('summoner-icon');
        summonerIcon.src = `https://ddragon.leagueoflegends.com/cdn/13.3.1/img/profileicon/${summoner.profileIconId}.png`;

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
            //Ik ga eerlijk zijn eerste gedeelte van de regex is mine maar daarna copy pasta..
            // ..enige namen die dit veroorzaakte waren Kai'sa Bel'Veth Kha'Zix
            //Coole hack btw  [^\w\s] is zelfde als [^a-zA-Z0-9\s]
            //todo regex for & and .'s ex: Dr. Mundo, Nunu & Willump
            const filteredName = championName.replace(/[^a-zA-Z0-9\s]/g, '').replace(/^(...)(.)/, (_, firstThree, fourth) => firstThree + fourth.toLowerCase()).replace(/\s+/g, '');
            champImg.src = `https://ddragon.leagueoflegends.com/cdn/11.20.1/img/champion/${filteredName}.png`;



            // Set the text content of the HTML elements to the mastery data
            h3.textContent = championName;
            p1.textContent = `Champion Level: ${championLevel}`;
            p2.textContent = `Champion Points: ${championPoints}`;

            // Add the HTML elements to the card
            cardContent.appendChild(h3)
            cardContent.appendChild(p1);
            cardContent.appendChild(p2);
            cardContent.appendChild(champImg);
        }
        iconSummoner.appendChild(summonerIcon);


    });
}

displayData()







