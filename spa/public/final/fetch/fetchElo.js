import { getKey } from '/spa/src/api.js';

const key = getKey();
const fetchElo = async (summonerId) => {
    const summonerDataEloResponse = await fetch(`https://euw1.api.riotgames.com/lol/league/v4/entries/by-summoner/${summonerId}?api_key=${key}`);
    const summonerElo = await summonerDataEloResponse.json();

    const filteredElo = summonerElo.filter(elo => {
        //rito pls waarom is het niet RANKED_FLEX_5x5 dit koste mij weer 10 minuten ;(
        //have fail state in front end when placements are not finished for either :)
        return elo.queueType === 'RANKED_SOLO_5x5' || elo.queueType === 'RANKED_FLEX_SR';
    });




    switch (true) {
        case filteredElo.some(elo => elo.queueType === 'RANKED_SOLO_5x5') && filteredElo.some(elo => elo.queueType === 'RANKED_FLEX_SR'):
            // Both queue types are present in filteredElo, return the array
            console.log(filteredElo);
            return filteredElo;
        case filteredElo.some(elo => elo.queueType === 'RANKED_SOLO_5x5'):
            // Only RANKED_SOLO_5x5 is present in filteredElo
            const soloElo = filteredElo.filter(elo => elo.queueType === 'RANKED_SOLO_5x5');
            console.log(filteredElo);
            return soloElo.length > 0 ? soloElo : { error: 'RANKED_FLEX_5x5 data not found' };
        case filteredElo.some(elo => elo.queueType === 'RANKED_FLEX_SR'):
            // Only RANKED_FLEX_SR is present in filteredElo
            const flexElo = filteredElo.filter(elo => elo.queueType === 'RANKED_FLEX_SR');
            console.log(filteredElo);
            return flexElo.length > 0 ? flexElo : { error: 'RANKED_SOLO_5x5 data not found' };
        default:
            // Both queue types are empty in filteredElo
            return { error: 'Unranked' };
    }


};

export default fetchElo;