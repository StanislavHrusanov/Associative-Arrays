function phoneBook(arr) {
    let catalogue = {};

    for (let el of arr) {
        let [name, phone] = el.split(' ');
        catalogue[name] = phone;
    }

    for (let name in catalogue) {
        console.log(`${name} -> ${catalogue[name]}`);
    }
}
phoneBook(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']
);