function wordTracker(arr) {

    let wordsToSearchFor = arr.shift().split(' ');

    let words = {};

    for (let i = 0; i < wordsToSearchFor.length; i++) {
        let word = wordsToSearchFor[i];
        let count = 0;

        for (let j = 0; j < arr.length; j++) {
            let currWord = arr[j];

            if (word == currWord) {
                count++;
            }
        }
        words[word] = count;
    }

    let sorted = Object.entries(words).sort((a, b) => b[1] - a[1]);

    for (let el of sorted) {

        console.log(`${el[0]} - ${el[1]}`);
    }
}
wordTracker([
    'is the',
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']);