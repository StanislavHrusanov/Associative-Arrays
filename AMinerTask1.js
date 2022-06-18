function aMinerTask(arr) {

    let resourses = new Map();

    for (let i = 0; i < arr.length; i += 2) {
        let resourse = arr[i];
        let qty = Number(arr[i + 1]);

        if (!resourses.has(resourse)) {
            resourses.set(resourse, 0);
        }
        let existedResourse = resourses.get(resourse);
        resourses.set(resourse, existedResourse + qty)
    }
    for (let resourse of resourses.keys()) {
        console.log(`${resourse} -> ${resourses.get(resourse)}`);
    }
}
aMinerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15']);