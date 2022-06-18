function AMinerTask(arr) {
    let resourses = {};

    while (arr.length > 0) {

        let resourse = arr.shift();
        let qty = Number(arr.shift());

        if (!resourses.hasOwnProperty(resourse)) {
            resourses[resourse] = 0;
        }
        resourses[resourse] += qty;

    }

    for (let resourse in resourses) {
        console.log(`${resourse} -> ${resourses[resourse]}`);
    }
}
AMinerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
]
);