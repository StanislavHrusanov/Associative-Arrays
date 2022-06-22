function travelTime(arr) {
    let travelDestinations = fillTravelInfo(arr);
    let sortedDestinationsByCountryName = sortDestinationsByCountryNames(travelDestinations);
    let sortedDestinationByLowerCost = sortDestinationsByLowerCost(travelDestinations, sortedDestinationsByCountryName);
    printTravelDestination(sortedDestinationByLowerCost);

    function printTravelDestination(sortedDestinationByLowerCost) {

        for (let country in sortedDestinationByLowerCost) {
            let entries = Object.entries(sortedDestinationByLowerCost[country]);
            let townsCosts = [];
            entries.map(el => townsCosts.push(el.join(' -> ')));

            console.log(`${country} -> ${townsCosts.join(' ')}`);
        }
    }

    function sortDestinationsByLowerCost(travelDestinations, sortedDestinationsByCountryName) {

        for (let country in sortedDestinationsByCountryName) {
            let entries = Object.entries(travelDestinations[country]);
            let sorted = entries.sort((a, b) => a[1] - b[1]);
            sorted.map(entry => sortedDestinationsByCountryName[country][entry[0]] = entry[1]);
        }
        return sortedDestinationsByCountryName;
    }

    function sortDestinationsByCountryNames(travelDestinations) {

        let sortedCountries = {};
        let sorted = Object.keys(travelDestinations).sort((a, b) => a.localeCompare(b))
            .map(country => sortedCountries[country] = {});

        return sortedCountries;

    }

    function fillTravelInfo(arr) {
        let travelDestinations = {};

        for (let el of arr) {
            let elAsArr = el.split(' > ');
            let country = elAsArr[0];
            let town = elAsArr[1];
            let travelCost = Number(elAsArr[2]);

            if (!travelDestinations.hasOwnProperty(country)) {
                travelDestinations[country] = {};
            }

            if (!travelDestinations[country].hasOwnProperty(town)) {

                travelDestinations[country][town] = travelCost;
            } else {
                if (travelCost < travelDestinations[country][town]) {
                    travelDestinations[country][town] = travelCost;
                }
            }

        }
        return travelDestinations;
    }
}
travelTime([
    'Bulgaria > Sofia > 25000',
    'Bulgaria > Sofia > 25000',
    'Kalimdor > Orgrimar > 25000',
    'Albania > Tirana > 25000',
    'Bulgaria > Varna > 25010',
    'Bulgaria > Lukovit > 10']);