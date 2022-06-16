function addressBook(arr) {
    let catalogue = {};

    for (let el of arr) {
        let [person, address] = el.split(':');

        catalogue[person] = address;
    }
    let keys = Object.keys(catalogue);

    keys.sort((a, b) => a.localeCompare(b));

    for (let key of keys) {
        console.log(`${key} -> ${catalogue[key]}`);
    }

}
addressBook(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd']
);