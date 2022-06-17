function wordOccurrences(arr) {
    let words = {};

    for (let i = 0; i < arr.length; i++) {
        let word = arr[i];
        let counter = 0;
        if (words.hasOwnProperty(word)) {
            continue;
        }
        for (let j = 0; j < arr.length; j++) {
            let currWord = arr[j];
            if (word == currWord) {
                counter++;
            }
        }
        words[word] = counter;
    }
    let sorted = Object.entries(words).sort((a, b) => b[1] - a[1]);

    sorted.map(el => console.log(`${el[0]} -> ${el[1]} times`));
}
wordOccurrences(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]);