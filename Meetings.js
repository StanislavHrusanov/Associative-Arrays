function meetings(arr) {
    let schedule = {};

    for (let el of arr) {
        let [day, person] = el.split(' ');

        if (schedule.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`);
        } else {
            schedule[day] = person;
            console.log(`Scheduled for ${day}`);
        }
    }

    for (let day in schedule) {
        console.log(`${day} -> ${schedule[day]}`);
    }
}
meetings(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']
);