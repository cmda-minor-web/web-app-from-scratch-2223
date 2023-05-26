import { getKey } from '/spa/src/api.js';

const key = getKey();

const fetchSummoner = async (summonerName) => {
    const summonerDataResponse = await fetch(`https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${key}`);
    const summoner = await summonerDataResponse.json();

    console.log(summoner);

    return summoner;
};

export default fetchSummoner;