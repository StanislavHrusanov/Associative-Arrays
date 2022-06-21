function oddOccurrences(str) {
    let strToLowerCase = str.toLowerCase();
    let strToLowerCaseAsArr = strToLowerCase.split(' ');
    let words = {};

    for (let i = 0; i < strToLowerCaseAsArr.length; i++) {
        let word = strToLowerCaseAsArr[i];
        let count = 0;

        if (words.hasOwnProperty(word)) {
            continue;
        }

        for (let j = 0; j < strToLowerCaseAsArr.length; j++) {
            let currWord = strToLowerCaseAsArr[j];

            if (word == currWord) {
                count++;
            }
        }
        words[word] = count;
    }

    let output = [];

    for (let el of strToLowerCaseAsArr) {

        for (let key in words) {

            if (el == key && words[key] % 2 != 0 && !output.includes(el)) {
                output.push(el);
            }
        }
    }
    console.log(output.join(' '));
}
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');