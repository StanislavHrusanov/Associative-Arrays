function piccolo(arr) {
    let parking = {};

    for (let command of arr) {
        let commandAsArr = command.split(', ');
        let move = commandAsArr[0];
        let car = commandAsArr[1];

        if (move == 'IN') {
            parking[car] = move;
        } else if (move == 'OUT') {
            delete parking[car];
        }
    }
    let sorted = Object.keys(parking).sort((a, b) => a.localeCompare(b));

    if (sorted.length > 0) {
        sorted.map(car => console.log(car));
    } else {
        console.log('Parking Lot is Empty');
    }
}
piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA']
);