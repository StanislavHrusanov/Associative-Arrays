function storage(arr) {
    let map = new Map();

    for (let el of arr) {
        let [item, qty] = el.split(' ');
        qty = Number(qty);

        if (map.has(item)) {
            let currQty = map.get(item);
            map.set(item, currQty + qty);
        } else {
            map.set(item, qty);
        }
    }

    for (let [key, value] of map) {
        console.log(`${key} -> ${value}`);
    }
}
storage(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']
);