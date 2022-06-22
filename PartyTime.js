function partyTime(arr) {
    let vip = [];
    let regular = [];

    let command = arr.shift();

    while (command != 'PARTY') {

        if (command.charCodeAt(0) > 47 && command.charCodeAt(0) < 58) {
            vip.push(command);

        } else {
            regular.push(command);
        }
        command = arr.shift();
    }

    for (let guest of arr) {

        if (vip.includes(guest)) {
            let indexOfGuest = vip.indexOf(guest);
            vip.splice(indexOfGuest, 1);

        } else if (regular.includes(guest)) {
            let indexOfGuest = regular.indexOf(guest);
            regular.splice(indexOfGuest, 1);
        }
    }

    console.log(vip.length + regular.length);

    if (vip.length > 0) {
        console.log(vip.join('\n'));
    }

    if (regular.length > 0) {
        console.log(regular.join('\n'));
    }
}
partyTime(['m8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ',
    '9CQBGUeJ',
    '9CQBGUeJ',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'xys2FYzn',
    'MDzcM9ZK',
    'PARTY',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'm8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ'
]
);