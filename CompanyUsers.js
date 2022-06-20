function companyUsers(arr) {
    let companies = {};

    for (let el of arr) {
        let elAsArr = el.split(' -> ');
        let companyName = elAsArr[0];
        let personId = elAsArr[1];

        if (!companies.hasOwnProperty(companyName)) {
            companies[companyName] = [];
        }

        if (!companies[companyName].includes(personId)) {
            companies[companyName].push(personId);
        }
    }

    let sorted = Object.keys(companies).sort((a, b) => a.localeCompare(b));

    sorted.map(name => console.log(`${name}\n-- ${companies[name].join('\n-- ')}`));
}
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
]
);