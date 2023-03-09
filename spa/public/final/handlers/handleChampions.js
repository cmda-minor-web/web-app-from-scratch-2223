import fetchSummoner from "../fetch/fetchSummoner.js";
import fetchMasteryBySummonerId from "../fetch/fetchMasteryBySummonerId.js";
import fetchChampions from "../fetch/fetchChampions.js";
import getFilteredName from "../helpers/getFilteredName.js";
import fetchSingleChampion from "../fetch/fetchSingleChampion.js";
const inputField = document.getElementById('search-summoner')
/*De eerste regel van de code creëert een leeg object champions.*/
let champions = {};
export default async function handleChampions() {
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
    })


    window.addEventListener('hashchange', changeChampion)

    const currentHash = window.location.hash;

    //sets default to the first champion in the array, instead of the hardcoded example
    if (currentHash) {
        const championHashId = summonerMastery[0].championId;
        const hashFilter = getFilteredName(champions[championHashId])
        window.location.hash = `${hashFilter}`;
    } else {
        window.location.hash = 'lol.com';
    }

    async function changeChampion(event) {
        // get the selected champion ID from the hash
        const championSelector = window.location.hash.slice(1);

        //OBJECT.VALUES en kEYS zijn ZO GOATED WHAT THE FUCKKKKKKKKKKK DUDE
        const selectedChampion = Object.values(championData.data).find(champion => {
            return champion.id === championSelector;
        });


        if (selectedChampion) {
            //todo could be cleaner but works for now okay .. i needed the epic lore

            const filteredName = getFilteredName(selectedChampion.id)
            const championBackground = document.querySelector('.champion-background');
            const loader = document.querySelector('.champion-background-loading')

            const backgroundImg = new Image();
            backgroundImg.onload = function () {
                setTimeout(async () => {
                    const filteredSingleChampionName = getFilteredName(selectedChampion.name)
                    const singularData = await fetchSingleChampion(filteredSingleChampionName)
                    console.log(singularData)
                    document.getElementById('champion-click-name').textContent = selectedChampion.name;
                    document.getElementById('champion-click-title').textContent = selectedChampion.title;
                    document.getElementById('champion-click-bio').textContent = singularData.lore;
                    championBackground.style.backgroundImage = `url(${this.src})`
                    loader.style.display = 'none'
                }, 500)
            }
            backgroundImg.src = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${filteredName}_0.jpg`
            loader.style.display = 'block';

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


    const championMasteryLevel = document.getElementById('champion-click-level')
    const championMasteryPoints = document.getElementById('champion-click-points')
    const championMasteryChest = document.getElementById('champion-click-chest')
    championMasteryLevel.onload = function () {
        console.log('Image loaded successfully');
    };
    //Start the loop so, we loop through our top 6 champions
    for (let i = 0; i < 6; i++) {

        console.log(summonerMastery[i])
        const championId = summonerMastery[i].championId;
        const championName = champions[championId];
        const masteryLevel = summonerMastery[i].championLevel;
        const masteryPoints = summonerMastery[i].championPoints;

        const chestGrantedUrl = 'https://raw.communitydragon.org/7.23/plugins/rcp-fe-lol-champion-mastery-notifications/unknown/bcc5aff41f45fe6b.png';
        const chestNotGrantedUrl = 'https://i.ibb.co/L6f6hwy/no-mastery.png';

        // Create a new li element for the champion portrait
        const championPortrait = document.createElement('li');
        championPortrait.classList.add('single-champion-slider');

        // Create an image element for the champion icon
        const champImg = document.createElement('img');

        const championPortraitName = document.createElement('p');

        championPortraitName.textContent = championName

        const championLink = document.createElement('a');
        const filteredName2 = getFilteredName(champions[championId])
        championLink.href = `#${filteredName2}`

        //Coole hack btw  [^\w\s] is zelfde als [^a-zA-Z0-9\s] / Regex voor het replacen van de ' en wat whitespace en special caharcaters
        //todo regex for & and .'s ex: Dr. Mundo, Nunu & Willump
        const filteredName = getFilteredName(championName)
        champImg.src = `https://ddragon.leagueoflegends.com/cdn/11.20.1/img/champion/${filteredName}.png`;

        // cool trick updating champ data from here
        championPortrait.addEventListener('click', () => {
            setTimeout(() => {
                championMasteryLevel.src = `https://raw.communitydragon.org/7.23/plugins/rcp-fe-lol-champion-mastery-notifications/global/default/assets/cm_rank_up/${masteryLevel}.png`;
                championMasteryPoints.textContent = `${masteryPoints} points`;
                //ternary operator very cool as well
                const chestImageSrc = summonerMastery[i].chestGranted ? chestGrantedUrl : chestNotGrantedUrl;
                championMasteryChest.innerHTML = `<img src="${chestImageSrc}" alt="Chest granted?"/>`;

            }, 400.05)
        });

        championPortrait.appendChild(champImg);
        championPortrait.appendChild(championPortraitName);
        championPortraits.appendChild(championPortrait);
        championLink.appendChild(championPortrait);
        championPortraits.appendChild(championLink);


    }

}