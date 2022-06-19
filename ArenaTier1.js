function arenaTier(arr) {

    let gladiators = {};
    let line = arr.shift();

    while (line != 'Ave Cesar') {

        if (line.includes('>')) {
            let lineAsArr = line.split(' -> ');
            let name = lineAsArr[0];
            let technique = lineAsArr[1];
            let skill = Number(lineAsArr[2]);

            if (!gladiators.hasOwnProperty(name)) {
                gladiators[name] = {};
            }

            if (!gladiators[name].hasOwnProperty(technique)) {
                gladiators[name][technique] = 0;
            }

            if (gladiators[name][technique] < skill) {
                gladiators[name][technique] = skill;
            }

        } else {
            let lineAsArr = line.split(' vs ');
            let firstGladiator = lineAsArr[0];
            let secondGladiator = lineAsArr[1];

            if (gladiators.hasOwnProperty(firstGladiator) && gladiators.hasOwnProperty(secondGladiator)) {

                let firstGladiatorTechniques = Object.keys(gladiators[firstGladiator]);
                let secondGladiatorTechniques = Object.keys(gladiators[secondGladiator]);
                let isExist = false;

                for (let firstGladiatorTechnique of firstGladiatorTechniques) {

                    for (let secondGladiatorTechnique of secondGladiatorTechniques) {

                        if (firstGladiatorTechnique == secondGladiatorTechnique) {
                            isExist = true;
                            break;
                        }
                    }
                }

                if (isExist) {
                    let firstGladiatorTotalSkills = getTotalskills(gladiators[firstGladiator]);
                    let secondGladiatorTotalSkills = getTotalskills(gladiators[secondGladiator]);

                    firstGladiatorTotalSkills > secondGladiatorTotalSkills ? delete gladiators[secondGladiator] : delete gladiators[firstGladiator];
                }
            }
        }
        line = arr.shift();
    }
    let entries = Object.entries(gladiators);

    entries.sort((a, b) => getTotalskills(b[1]) - getTotalskills(a[1]) || a[0].localeCompare(b[0]))
        .map(el => {
            console.log(`${el[0]}: ${getTotalskills(el[1])} skill`);
            let otherEntries = Object.entries(el[1]);
            otherEntries.sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
                .map(el => console.log(`- ${el[0]} <!> ${el[1]}`));
        })


    function getTotalskills(gladiator) {

        let totalSkills = 0;

        Object.keys(gladiator)
            .map(el => totalSkills += gladiator[el]);

        return totalSkills;
    }
}
arenaTier([
    'Peter -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Peter vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Maximilian',
    'Ave Cesar']);