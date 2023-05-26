
const fetchChampions = async () => {
    try {
        const championDataResponse = await fetch('https://ddragon.leagueoflegends.com/cdn/13.9.1/data/en_US/champion.json');
        if(!championDataResponse.ok) {
            throw new Error('No response between range 200-2999');
        }
        const championData = await championDataResponse.json();
        console.log(championData);
        return championData;
    } catch (error) {
        console.error('error: champion fetched before username has been set')
        window.alert('Please type in your username above, before you use this function :)')
    }

};

export default fetchChampions;