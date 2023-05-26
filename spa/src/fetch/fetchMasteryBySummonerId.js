import { getKey } from '../api.js';

const key = getKey();
const fetchMasteryBySummonerId = async (summonerId) => {
    const summonerDataMasteryResponse = await fetch(`https://euw1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/${summonerId}?api_key=${key}`);
    const summonerMastery = await summonerDataMasteryResponse.json();
    console.log(summonerMastery);
    return summonerMastery;
};

export default fetchMasteryBySummonerId;