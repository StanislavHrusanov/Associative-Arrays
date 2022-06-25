function garage(arr) {

    let garage = {};

    while (arr.length > 0) {
        let line = arr.shift();
        let lineAsArr = line.split(' - ');
        let numberOfGarage = lineAsArr.shift();
        let carInfoAsArr = lineAsArr.shift().split(', ');

        if (!garage.hasOwnProperty(numberOfGarage)) {
            garage[numberOfGarage] = [];
        }

        let newCar = [];
        for (let info of carInfoAsArr) {

            info = info.split(': ').join(' - ');
            newCar.push(info);
        }
        garage[numberOfGarage].push(newCar);
    }

    for (let currGarage in garage) {
        console.log(`Garage № ${currGarage}`);

        for (let currCar of garage[currGarage]) {
            console.log(`--- ${currCar.join(', ')}`);
        }
    }
}
garage(['1 - color: green, fuel type: petrol',
    '1 - color: dark red, manufacture: WV',
    '2 - fuel type: diesel',
    '3 - color: dark blue, fuel type: petrol']
);