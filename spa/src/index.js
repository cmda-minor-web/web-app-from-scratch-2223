//todo isn't it smarter to convert all these html id's to components maybe this will get messy otherwise..
//BIG TODO💀 It sure is getting messy in these functions, need to split them in different directories and export/import them
//todo I am not a fan of how I'm inserting the tables, it's alot of copying and pasting the same things i ALREADY have.

import fetchSummoner from './fetch/fetchSummoner.js';
import fetchMasteryBySummonerId from './fetch/fetchMasteryBySummonerId.js';
import fetchChampions from './fetch/fetchChampions.js';
import fetchElo from './fetch/fetchElo.js';

const inputField = document.getElementById("summonerName");
const button = document.querySelector(".champions-mastery");
// const cardHeader = document.querySelector(".card-header");
// const cardContent = document.querySelector(".card-content");
const championInfo = document.getElementById('champion-name')
const chestInfo = document.querySelector('.chest-achieved')
const tableContent = document.querySelector('.table-content')

//empty champions object that will get filled up later, so we can do something with the champions
let champions = {};

async function displaySearch() {
    inputField.addEventListener("change", async () => {

        const username = inputField.value;
        const summoner = await fetchSummoner(username);
        const summonerId = summoner.id
        const summonerElo = await fetchElo(summonerId)

        //todo this does not work yet. the error as we always return a string instead of "undefined" (undefined is a summoner tho)
        //todo for now i don't have to loop through the entire array i can simply say i want the first because there are no other summoners

        // select the <p> element within the "welcome-header" <div>
        const summonerName = document.getElementById("welcomeMsg");
        const summonerLevel = document.getElementById("summonerLevel");
        // set the text content of the <p> element to the summoner's name and level
        summonerName.textContent = summoner.name;
        summonerLevel.textContent = summoner.summonerLevel;

        const table = document.getElementById("elo-table");

        //while loop so the rows get deleted, instead of da headers
        while (table.rows.length > 1) {
            table.deleteRow(1);
        }

        const row = table.insertRow();
        // add cells to the row to display the summoner's data
        const iconCell = row.insertCell();
        const summonerNameCell = row.insertCell();
        const tierCell = row.insertCell();
        const lpCell = row.insertCell();
        const winsCell = row.insertCell();
        const lossesCell = row.insertCell();

        const summonerIconMini = document.createElement('img');
        summonerIconMini.src = `https://ddragon.leagueoflegends.com/cdn/13.3.1/img/profileicon/${summoner.profileIconId}.png`;

        iconCell.appendChild(summonerIconMini)
        summonerNameCell.textContent = summonerElo[0].summonerName;
        tierCell.textContent = summonerElo[0].tier + ' ' + summonerElo[0].rank;
        lpCell.textContent = `LP: ${summonerElo[0].leaguePoints}`;
        winsCell.textContent = `Wins: ${summonerElo[0].wins}`;
        lossesCell.textContent = `Losses: ${summonerElo[0].losses}`;

        //comment about tables, eigen tabel aanmaken en opvullen inplaats van generaten

        tableContent.appendChild(table);


    });
}

//Displays the summoner name and level in the welcome message and fetches the corresponding mastery data when the "champions-mastery" button is clicked
async function displayData() {
    //todo This could be mega cleaner instead of dumping all the html here I think
    await displaySearch()
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

        console.log(champions);
        // const championData = await fetchChampions();
        //Here I clear my existing html
        // championInfo.innerHTML = "";
        // chestInfo.innerHTML = "";


        const table = document.getElementById("champion-mastery-table");

        //Start the loop so, we loop through our top 10 champions
        for (let i = 0; i < 10; i++) {

            const championId = summonerMastery[i].championId;
            const championLevel = summonerMastery[i].championLevel;
            const championPoints = summonerMastery[i].championPoints;
            const chestGranted = summonerMastery[i].chestGranted;
            const championName = champions[championId];


            // Create a new row element for each champion
            const newRow = table.insertRow();

            // Create a cell for each column in the row
            const nameCell = newRow.insertCell();
            const levelCell = newRow.insertCell();
            const pointsCell = newRow.insertCell();
            const chestCell = newRow.insertCell();
            const iconCell = newRow.insertCell();

            //todo fetch champions to display names with key and value in seperate function :O this is ugli

            const champImg = document.createElement('img');
            //Ik ga eerlijk zijn eerste gedeelte van de regex is mine maar daarna copy pasta..
            // ..enige namen die dit veroorzaakte waren Kai'sa Bel'Veth Kha'Zix
            //Coole hack btw  [^\w\s] is zelfde als [^a-zA-Z0-9\s]
            //todo regex for & and .'s ex: Dr. Mundo, Nunu & Willump
            const filteredName = championName.replace(/[^a-zA-Z0-9\s]/g, '').replace(/^(...)(.)/, (_, firstThree, fourth) => firstThree + fourth.toLowerCase()).replace(/\s+/g, '');
            champImg.src = `https://ddragon.leagueoflegends.com/cdn/11.20.1/img/champion/${filteredName}.png`;


            // Set the text content of the HTML elements to the mastery data
            nameCell.textContent = championName;
            levelCell.textContent = `Champion Level: ${championLevel}`;
            pointsCell.textContent = `Champion Points: ${championPoints}`;
            chestCell.textContent = `${chestGranted}`;
            iconCell.appendChild(champImg)

        }
    });
}

displayData()







