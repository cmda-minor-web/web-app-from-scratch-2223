//todo ~validation
import fetchSummoner from './fetch/fetchSummoner.js';
import fetchMasteryBySummonerId from "./fetch/fetchMasteryBySummonerId.js";
import fetchChampions from "./fetch/fetchChampions.js";
import fetchElo from './fetch/fetchElo.js';
import {getQueueData} from './helpers/getQueueData.js';


const inputField = document.getElementById('search-summoner')
const displayTopChampions = document.getElementById('top-6-champions')
// const displayDefaultRotation = document.getElementById('my-best-champions')

/*De eerste regel van de code creëert een leeg object champions.*/
let champions = {};

async function displaySearch() {
    inputField.addEventListener("change", async () => {

        const username = inputField.value;
        const summoner = await fetchSummoner(username);
        const summonerId = summoner.id
        const summonerElo = await fetchElo(summonerId)

        const soloQueueData = getQueueData(summonerElo, 'RANKED_SOLO_5x5');
        const flexQueueData = getQueueData(summonerElo, 'RANKED_FLEX_SR');


        //todo for now i don't have to loop through the entire array i can simply say i want the first because there are no other summoners

        const summonerName = document.getElementById("summoner-name");
        const summonerLevel = document.getElementById("summoner-level");

        const summonerTierSolo = document.getElementById('summoner-tier-solo')
        const summonerResultsSolo = document.getElementById('summoner-result-solo')
        const summonerResultSumSolo = document.getElementById('summoner-result-sum-solo')
        const summonerLPSolo = document.getElementById('summoner-lp-solo')
        const summonerTierIconSolo = document.getElementById('ranked-icon-solo')


        const summonerTierFlex = document.getElementById('summoner-tier-flex')
        const summonerResultsFlex = document.getElementById('summoner-result-flex')
        const summonerResultSumFlex = document.getElementById('summoner-result-sum-flex')
        const summonerLPFlex = document.getElementById('summoner-lp-flex')
        const summonerTierIconFlex = document.getElementById('ranked-icon-flex')


        // set the text content of the <p> element to the summoner's name and level
        summonerName.textContent = summoner.name;
        summonerLevel.textContent = summoner.summonerLevel;


        const summonerIconMini = document.getElementById('summoner-icon');
        summonerIconMini.src = `https://ddragon.leagueoflegends.com/cdn/13.3.1/img/profileicon/${summoner.profileIconId}.png`;

        summonerTierIconSolo.src = soloQueueData.iconSrc;
        summonerTierSolo.textContent = soloQueueData.tier;
        summonerLPSolo.textContent = soloQueueData.lp;
        summonerResultsSolo.textContent = soloQueueData.results;
        summonerResultSumSolo.textContent = soloQueueData.winRate;

        summonerTierIconFlex.src = flexQueueData.iconSrc;
        summonerTierFlex.textContent = flexQueueData.tier;
        summonerLPFlex.textContent = flexQueueData.lp;
        summonerResultsFlex.textContent = flexQueueData.results;
        summonerResultSumFlex.textContent = flexQueueData.winRate;

    });
}

async function displayData() {
    await displaySearch()

    displayTopChampions.addEventListener('click', async () => {

        const summonerName = inputField.value;
        const summoner = await fetchSummoner(summonerName);
        const summonerId = summoner.id;
        const summonerMastery = await fetchMasteryBySummonerId(summonerId);
        const championData = await fetchChampions();


        console.log(championData);

        //Thanks maijla? voor het verhelderen van mijn eigen code
        //In baby language, I try to loop through the championsData object.
        /*Gebuik methode forEach() op de array van keys van de championData-data-object
         om elk individueel championobject in championData te doorlopen. */
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

            if (selectedChampion) {

                document.getElementById('champion-click-name').textContent = selectedChampion.name;
                document.getElementById('champion-click-title').textContent = selectedChampion.title;
                const filteredName = selectedChampion.id.replace(/[^a-zA-Z0-9\s]/g, '').replace(/^(...)(.)/, (_, firstThree, fourth) => firstThree + fourth.toLowerCase()).replace(/\s+/g, '');
                const championBackground = document.querySelector('.champion-background');
                championBackground.style.backgroundImage = `url(https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${filteredName}_0.jpg)`
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
        const championPortraits = document.querySelector('.champion-slider-style');
        championPortraits.innerHTML = '';

        //Start the loop so, we loop through our top 6 champions
        for (let i = 0; i < 6; i++) {

            // const championLevel = summonerMastery[i].championLevel;
            // const championPoints = summonerMastery[i].championPoints;
            // const chestGranted = summonerMastery[i].chestGranted;
            const championId = summonerMastery[i].championId;
            const championName = champions[championId];

            // Create a new div element for the champion portrait
            const championPortrait = document.createElement('li');
            championPortrait.classList.add('single-champion-slider');

            // Create an image element for the champion icon
            const champImg = document.createElement('img');

            const championPortraitName = document.createElement('p');

            championPortraitName.textContent = championName

            const championLink = document.createElement('a');
            const filteredName2 = champions[championId].replace(/[^a-zA-Z0-9\s]/g, '').replace(/^(...)(.)/, (_, firstThree, fourth) => firstThree + fourth.toLowerCase()).replace(/\s+/g, '');
            championLink.href = `#${filteredName2}`

            //Coole hack btw  [^\w\s] is zelfde als [^a-zA-Z0-9\s] / Regex voor het replacen van de ' en wat whitespace en special caharcaters
            //todo regex for & and .'s ex: Dr. Mundo, Nunu & Willump
            const filteredName = championName.replace(/[^a-zA-Z0-9\s]/g, '').replace(/^(...)(.)/, (_, firstThree, fourth) => firstThree + fourth.toLowerCase()).replace(/\s+/g, '');
            champImg.src = `https://ddragon.leagueoflegends.com/cdn/11.20.1/img/champion/${filteredName}.png`;


            championPortrait.appendChild(champImg);
            championPortrait.appendChild(championPortraitName);
            championPortraits.appendChild(championPortrait);
            championLink.appendChild(championPortrait);
            championPortraits.appendChild(championLink);

        }
    });
}

displayData();