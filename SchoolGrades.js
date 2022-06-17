function schoolGrades(arr) {
    let studentsGrades = {};

    for (let el of arr) {
        elAsArr = el.split(' ');
        let name = elAsArr.shift();
        let grades = elAsArr.map(Number);

        if (studentsGrades.hasOwnProperty(name)) {
            grades.forEach(el => studentsGrades[name].push(el));
        } else {
            studentsGrades[name] = grades;
        }
    }

    let sorted = Object.keys(studentsGrades);
    sorted.sort((a, b) => a.localeCompare(b));

    for (let name of sorted) {
        let sum = studentsGrades[name].reduce((a, b) => a + b, 0);
        let avg = (sum / studentsGrades[name].length);
        studentsGrades[name] = avg;

        console.log(`${name}: ${studentsGrades[name].toFixed(2)}`);
    }

}
schoolGrades(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']
);