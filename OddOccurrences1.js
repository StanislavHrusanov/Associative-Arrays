function oddOccurrences(str) {
    let strToLowerCase = str.toLowerCase();
    let strToLowerCaseAsArr = strToLowerCase.split(' ');
    let words = [];

    for (let i = 0; i < strToLowerCaseAsArr.length; i++) {
        let word = strToLowerCaseAsArr[i];
        let count = 0;

        if (words.includes(word)) {
            continue;
        }

        for (let j = 0; j < strToLowerCaseAsArr.length; j++) {
            let currWord = strToLowerCaseAsArr[j];

            if (word == currWord) {
                count++;
            }
        }
        if (count % 2 != 0) {
            words.push(word);
        }
    }
    console.log(words.join(' '));
}
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');