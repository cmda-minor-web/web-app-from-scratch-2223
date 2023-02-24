//todo ik denk dat ik de filter const die ik zo vaak oproep moet veranderen naar een filter function?
import fetchSummoner from './fetch/fetchSummoner.js';
import fetchMasteryBySummonerId from "./fetch/fetchMasteryBySummonerId.js";
import fetchChampions from "./fetch/fetchChampions.js";
import fetchElo from './fetch/fetchElo.js';


const inputField = document.getElementById('search-summoner')
const showChampionsButton = document.getElementById('my-best-champions')

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
        const summonerName = document.getElementById("welcome-message");
        const summonerLevel = document.getElementById("summoner-level");

        const summonerTier = document.getElementById('summoner-tier')
        const summonerResults = document.getElementById('summoner-result')
        const summonerResultSum = document.getElementById('summoner-result-sum')
        const summonerLP = document.getElementById('summoner-lp')


        // set the text content of the <p> element to the summoner's name and level
        summonerName.textContent = `Welcome ${summoner.name} to my application`;
        summonerLevel.textContent = summoner.summonerLevel;


        const summonerIconMini = document.getElementById('summoner-icon');
        summonerIconMini.src = `https://ddragon.leagueoflegends.com/cdn/13.3.1/img/profileicon/${summoner.profileIconId}.png`;

        const summonerTierIcon = document.getElementById('ranked-icon')
        const filteredElo = summonerElo[0].tier.replace(/\d+/g, "").toLowerCase();
        summonerTierIcon.src = `https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-shared-components/global/default/${filteredElo}.png`


        const wins = summonerElo[0].wins;
        const losses = summonerElo[0].losses;
        const totalGames = wins + losses;
        const winRate = (wins / totalGames) * 100;


        summonerTier.textContent = summonerElo[0].tier + ' ' + summonerElo[0].rank ;
        summonerLP.textContent = summonerElo[0].leaguePoints + ' LP';
        summonerResults.textContent = `Wins: ${summonerElo[0].wins} Losses: ${summonerElo[0].losses}`;
        summonerResultSum.textContent = `Winrate: ${winRate.toFixed(2)}%`;
    });
}

async function displayData() {
    //todo This could be mega cleaner instead of dumping all the html here I think
    await displaySearch()
    showChampionsButton.addEventListener('click', async () => {
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
            // console.log(championData.data[key].image.full)
        })


// Listen for the hashchange event
        window.addEventListener('hashchange', changeChampion)

        function changeChampion(event) {
            // get the selected champion ID from the hash
            const championSelector = window.location.hash.slice(1);

            //OBJECT.VALUES en kEYS zijn ZO GOATED WHAT THE FUCKKKKKKKKKKK DUDE
            const selectedChampion = Object.values(championData.data).find(champion => {
                return champion.id === championSelector;
            });

            // If a champion was found, display its data in the champion-clicked div
            if (selectedChampion) {
                document.getElementById('champion-click-name').textContent = selectedChampion.name;
                document.getElementById('champion-click-title').textContent = selectedChampion.title;
                const filteredName = selectedChampion.id.replace(/[^a-zA-Z0-9\s]/g, '').replace(/^(...)(.)/, (_, firstThree, fourth) => firstThree + fourth.toLowerCase()).replace(/\s+/g, '');
                document.getElementById('champion-click-image').src = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${filteredName}_0.jpg`;
            }
        }

// loop through  champion portraits and add click event listeners to their links
        const championLinks = document.querySelectorAll('.champion-portrait-link');
        championLinks.forEach(link => {
            link.addEventListener('click', (event) => {
                event.preventDefault();
                window.location.hash = link.dataset.championId;
            });
        });


        console.log(champions);
        const championPortraits = document.querySelector('.champion-portraits');
        championPortraits.innerHTML = '';

        //Start the loop so, we loop through our top 5 champions
        for (let i = 0; i < 5; i++) {

            // const championLevel = summonerMastery[i].championLevel;
            // const championPoints = summonerMastery[i].championPoints;
            // const chestGranted = summonerMastery[i].chestGranted;
            const championId = summonerMastery[i].championId;
            const championName = champions[championId];

            // Create a new div element for the champion portrait
            const championPortrait = document.createElement('div');

            // Create an image element for the champion icon
            const champImg = document.createElement('img');

            const championNameNode = document.createTextNode(championName);

            const championLink = document.createElement('a');
            const filteredName2 = champions[championId].replace(/[^a-zA-Z0-9\s]/g, '').replace(/^(...)(.)/, (_, firstThree, fourth) => firstThree + fourth.toLowerCase()).replace(/\s+/g, '');
            championLink.href = `#${filteredName2}`

            //Coole hack btw  [^\w\s] is zelfde als [^a-zA-Z0-9\s] / Regex voor het replacen van de ' en wat whitespace en special caharcaters
            //todo regex for & and .'s ex: Dr. Mundo, Nunu & Willump
            const filteredName = championName.replace(/[^a-zA-Z0-9\s]/g, '').replace(/^(...)(.)/, (_, firstThree, fourth) => firstThree + fourth.toLowerCase()).replace(/\s+/g, '');
            champImg.src = `https://ddragon.leagueoflegends.com/cdn/11.20.1/img/champion/${filteredName}.png`;



            championPortrait.appendChild(champImg);
            championPortrait.appendChild(championNameNode);
            championPortraits.appendChild(championPortrait);
            championLink.appendChild(championPortrait);
            championPortraits.appendChild(championLink);

        }
    });
}

displayData();