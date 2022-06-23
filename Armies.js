function armies(arr) {

    let armiesInfo = {};

    while (arr.length > 0) {

        let line = arr.shift();

        if (line.includes('arrives')) {
            line = line.split(' ');
            line.pop();
            let leader = line.join(' ');

            if (!armiesInfo.hasOwnProperty(leader)) {
                armiesInfo[leader] = {};
            }

        } else if (line.includes(':')) {
            line = line.split(': ');
            let leader = line.shift();
            line = line.join().split(', ');
            let nameOfArmy = line[0];
            let countOfArmy = Number(line[1]);

            if (armiesInfo.hasOwnProperty(leader)) {
                armiesInfo[leader][nameOfArmy] = countOfArmy;
            }

        } else if (line.includes('+')) {
            line = line.split(' + ');
            let nameOfArmy = line[0];
            let countOfArmy = Number(line[1]);

            for (let leader in armiesInfo) {

                if (armiesInfo[leader].hasOwnProperty(nameOfArmy)) {
                    armiesInfo[leader][nameOfArmy] += countOfArmy;
                }
            }

        } else if (line.includes('defeated')) {
            line = line.split(' ');
            line.pop();
            let leader = line.join(' ');

            if (armiesInfo.hasOwnProperty(leader)) {
                delete armiesInfo[leader];
            }
        }
    }

    let sortedLeaders = Object.keys(armiesInfo).sort((a, b) => getTotalArmyCount(armiesInfo[b]) - getTotalArmyCount(armiesInfo[a]));
    sortedLeaders.map(leader => {
        console.log(`${leader}: ${getTotalArmyCount(armiesInfo[leader])}`);
        let sortedArmy = Object.entries(armiesInfo[leader]).sort((a, b) => b[1] - a[1]);
        sortedArmy.map(army => console.log(`>>> ${army[0]} - ${army[1]}`));
    });

    function getTotalArmyCount(leader) {

        let totalArmyCount = 0;
        Object.entries(leader).map(army => totalArmyCount += army[1]);

        return totalArmyCount;

    }
}
armies(['Rick Burr arrives',
    'Findlay arrives',
    'Rick Burr: Juard, 1500',
    'Wexamp arrives',
    'Findlay: Wexamp, 34540',
    'Wexamp + 340',
    'Wexamp: Britox, 1155',
    'Wexamp: Juard, 43423']);