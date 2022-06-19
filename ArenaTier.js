function arenaTier(arr) {
    let gladiators = {};
    let line = arr.shift();

    while (line != 'Ave Cesar') {

        if (line.includes('>')) {
            addGladiator(line, gladiators);

        } else {
            compareGladiators(line, gladiators);
        }
        line = arr.shift();
    }

    let sortedByTotalSkills = sortByTotalSkills(gladiators);
    let sortedByTechnique = sortTechniqueInDescendingOrder(gladiators);

    printOutput(sortedByTotalSkills, sortedByTechnique);

    function printOutput(sortedByTotalSkills, sortedByTechnique) {

        for (let name in sortedByTotalSkills) {

            console.log(`${name}: ${sortedByTotalSkills[name]} skill`);

            let techniques = Object.keys(sortedByTechnique[name]);

            for (let technique of techniques) {

                console.log(`- ${technique} <!> ${sortedByTechnique[name][technique]}`);
            }
        }
    }

    function sortTechniqueInDescendingOrder(gladiators) {

        let sortedByTechnique = {};

        for (let gladiator in gladiators) {
            let entries = Object.entries(gladiators[gladiator]);
            let sorted = entries.sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));

            for (let el of sorted) {
                let key = el[0];
                let value = el[1];

                if (!sortedByTechnique.hasOwnProperty(gladiator)) {
                    sortedByTechnique[gladiator] = {};
                }
                sortedByTechnique[gladiator][key] = value;
            }
        }

        return sortedByTechnique;
    }

    function sortByTotalSkills(gladiators) {
        let namesAndTotalSkills = {};

        for (let gladiator in gladiators) {
            let keys = Object.keys(gladiators[gladiator]);
            let totalSkills = 0;
            for (let key of keys) {
                totalSkills += gladiators[gladiator][key];
            }
            namesAndTotalSkills[gladiator] = totalSkills;
        }
        let sortedByTotalSkills = {};
        Object.entries(namesAndTotalSkills).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
            .map(el => sortedByTotalSkills[el[0]] = el[1]);

        return sortedByTotalSkills;
    }

    function compareGladiators(line, gladiators) {

        let lineAsArr = line.split(' vs ');
        let firstGladiator = lineAsArr[0];
        let secondGladiator = lineAsArr[1];


        if (gladiators.hasOwnProperty(firstGladiator) && gladiators.hasOwnProperty(secondGladiator)) {
            let firstGladiatorTechniques = Object.keys(gladiators[firstGladiator]);
            let secondGladiatorTechniques = Object.keys(gladiators[secondGladiator]);
            let isExist = false;

            for (let fGTechnique of firstGladiatorTechniques) {

                for (let secGTechniques of secondGladiatorTechniques) {

                    if (fGTechnique == secGTechniques) {
                        isExist = true;
                        break;
                    }
                }
            }

            if (isExist) {
                let firstGladiatorTotalSkills = firstGladiatorTechniques
                    .map(t => Object.values(gladiators[firstGladiator][t]).reduce((a, b) => a + b, 0));
                let secGladiatorTotalSkills = secondGladiatorTechniques
                    .map(t => Object.values(gladiators[secondGladiator][t]).reduce((a, b) => a + b, 0));

                firstGladiatorTotalSkills > secGladiatorTotalSkills ? delete gladiators[secondGladiator] : delete gladiators[firstGladiator];
            }
        }

        return gladiators;
    }

    function addGladiator(line, gladiators) {

        let lineAsArr = line.split(' -> ');
        let name = lineAsArr[0];
        let technique = lineAsArr[1];
        let skill = Number(lineAsArr[2]);

        if (!gladiators.hasOwnProperty(name)) {
            gladiators[name] = {};
        }

        if (!gladiators[name].hasOwnProperty(technique)) {
            gladiators[name][technique] = skill;
        }

        if (skill > gladiators[name][technique]) {
            gladiators[name][technique] = skill;
        }

        return gladiators;
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
    'Ave Cesar'
]
);