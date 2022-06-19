function cardGame(arr) {

    let hands = {};

    for (let el of arr) {
        let elAsArr = el.split(': ');
        let nameOfThePlayer = elAsArr.shift();

        if (!hands.hasOwnProperty(nameOfThePlayer)) {
            hands[nameOfThePlayer] = [];
        }

        let cards = elAsArr.shift().split(', ');


        for (let card of cards) {
            if (!hands[nameOfThePlayer].includes(card)) {
                hands[nameOfThePlayer].push(card);
            }
        }

    }

    for (let el of Object.entries(hands)) {
        let key = el[0];
        let value = el[1];
        let score = 0;
        for (let cardValue of value) {
            cardValue = cardValue.split('');
            let power;
            let type;
            if (cardValue.length == 3) {
                power = 10;

                if (cardValue[cardValue.length - 1] == 'S') {
                    type = 4;
                } else if (cardValue[cardValue.length - 1] == 'H') {
                    type = 3;
                } else if (cardValue[cardValue.length - 1] == 'D') {
                    type = 2;
                } else if (cardValue[cardValue.length - 1] == 'C') {
                    type = 1;
                }
            } else {

                if (cardValue[0] >= '2' && cardValue[0] <= '9') {
                    power = cardValue[0];
                    power = Number(power);
                } else if (cardValue[0] == 'J') {
                    power = 11;
                } else if (cardValue[0] == 'Q') {
                    power = 12;
                } else if (cardValue[0] == 'K') {
                    power = 13;
                } else if (cardValue[0] == 'A') {
                    power = 14;
                }

                if (cardValue[cardValue.length - 1] == 'S') {
                    type = 4;
                } else if (cardValue[cardValue.length - 1] == 'H') {
                    type = 3;
                } else if (cardValue[cardValue.length - 1] == 'D') {
                    type = 2;
                } else if (cardValue[cardValue.length - 1] == 'C') {
                    type = 1;
                }
            }
            score += power * type;

        }
        hands[key] = score;
    }
    for (let name in hands) {
        console.log(`${name}: ${hands[name]}`);
    }
}
cardGame([
    'John: 2C, 4H, 9H, AS, QS',
    'Slav: 3H, 10S, JC, KD, 5S, 10S',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Slav: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'John: JD, JD, JD, JD'
]
);