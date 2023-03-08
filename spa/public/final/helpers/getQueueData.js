export const getQueueData = (summonerElo, queueType) => {
    const elo = summonerElo.find(function (elo) {
        return elo.queueType === queueType;
    });

    if (!elo) {
        return {
            tier: 'Unranked',
            lp: '0 LP',
            results: '0 W 0 L',
            winRate: '0%',
            iconSrc: 'https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-shared-components/global/default/unranked.png'
        };
    }

    const filteredElo = elo.tier.replace(/\d+/g, '').toLowerCase();
    const tier = elo.tier + ' ' + elo.rank;
    const lp = elo.leaguePoints + ' LP';
    const results = `${elo.wins} W ${elo.losses} L`;
    const winRate = ((elo.wins / (elo.wins + elo.losses)) * 100).toFixed(2) + '%';

    return {
        tier,
        lp,
        results,
        winRate,
        iconSrc: `https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-shared-components/global/default/${filteredElo}.png`,
    };
};