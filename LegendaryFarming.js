function legendaryFarming(str) {
    str = str.toLowerCase();
    strAsArr = str.split(' ');

    let legendaryItem = {};
    legendaryItem['shards'] = 0;
    legendaryItem['fragments'] = 0;
    legendaryItem['motes'] = 0;
    let junk = {};

    while (strAsArr.length > 0) {

        let qty = Number(strAsArr.shift());
        let material = strAsArr.shift();

        if (material == 'shards') {
            legendaryItem[material] += qty;

        } else if (material == 'fragments') {
            legendaryItem[material] += qty;

        } else if (material == 'motes') {
            legendaryItem[material] += qty;

        } else {
            if (!junk.hasOwnProperty(material)) {
                junk[material] = qty;
            } else {
                junk[material] += qty;
            }
        }

        if (legendaryItem['shards'] >= 250) {
            console.log('Shadowmourne obtained!');
            legendaryItem['shards'] -= 250;
            break;
        } else if (legendaryItem['fragments'] >= 250) {
            console.log('Valanyr obtained!');
            legendaryItem['fragments'] -= 250;
            break;
        } else if (legendaryItem['motes'] >= 250) {
            console.log('Dragonwrath obtained!');
            legendaryItem['motes'] -= 250;
            break;
        }
    }

    let sortedKeyMaterials = Object.entries(legendaryItem).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));

    sortedKeyMaterials.map(material => console.log(`${material[0]}: ${material[1]}`));

    let sortedJunkMaterials = Object.entries(junk).sort((a, b) => a[0].localeCompare(b[0]));

    sortedJunkMaterials.map(material => console.log(`${material[0]}: ${material[1]}`));
}
legendaryFarming('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver');