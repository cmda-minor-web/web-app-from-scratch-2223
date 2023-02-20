import { getKey } from '../api.js';

const key = getKey();
const fetchElo = async (summonerId) => {
    const summonerDataEloResponse = await fetch(`https://euw1.api.riotgames.com/lol/league/v4/entries/by-summoner/${summonerId}?api_key=${key}`);
    const summonerElo = await summonerDataEloResponse.json();
    console.log(summonerElo);
    return summonerElo;
};

export default fetchElo;