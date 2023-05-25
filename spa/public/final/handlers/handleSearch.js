import fetchSummoner from "../fetch/fetchSummoner.js";
import fetchElo from "../fetch/fetchElo.js";
import {getQueueData} from "../helpers/getQueueData.js";
const inputField = document.getElementById('search-summoner')

export default async function handleSearch() {


    const username = inputField.value;
    const statusMessage = document.getElementById('status-message');


    if (!username.trim()) {
        statusMessage.textContent = "Please enter a summoner name you can find this name in your league client.";
        return;
    }

    statusMessage.textContent = "Loading...";

    try {
        const summoner = await fetchSummoner(username);

        if (!summoner) {
            statusMessage.textContent = "Couldn't find a summoner with this name.";
            return;
        }

        const summonerId = summoner.id
        const summonerElo = await fetchElo(summonerId)

        const soloQueueData = getQueueData(summonerElo, 'RANKED_SOLO_5x5');
        const flexQueueData = getQueueData(summonerElo, 'RANKED_FLEX_SR');

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

        statusMessage.textContent = ""; // clear the message when data is loaded
        window.location.href = "#info-summoner-url";

    }
    catch (error) {
        statusMessage.textContent = "An error occurred while fetching data.";
    }
}