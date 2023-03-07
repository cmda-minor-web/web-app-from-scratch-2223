
const fetchChampions = async () => {
    const championDataResponse = await fetch('https://ddragon.leagueoflegends.com/cdn/9.19.1/data/en_US/champion.json');
    const championData = await championDataResponse.json();
    console.log(championData);
    return championData;
};

export default fetchChampions;