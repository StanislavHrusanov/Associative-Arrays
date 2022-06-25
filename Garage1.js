function garage(arr) {

    let garage = new Map();

    for (let line of arr) {
        let [garageNumber, carInfo] = line.split(' - ');

        if (!garage.has(garageNumber)) {
            garage.set(garageNumber, []);
        }

        let currGarage = garage.get(garageNumber);
        carInfo = carInfo.split(': ').join(' - ');
        currGarage.push(carInfo);
    }

    for (let currGarage of garage) {
        console.log(`Garage № ${currGarage[0]}`);
        let cars = currGarage[1];
        cars.map(car => console.log(`--- ${car}`));
    }
}
garage(['1 - color: green, fuel type: petrol',
    '1 - color: dark red, manufacture: WV',
    '2 - fuel type: diesel',
    '3 - color: dark blue, fuel type: petrol']
);