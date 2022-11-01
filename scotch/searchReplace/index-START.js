function searchReplace(str, word, newWord) {
    return str.replaceAll(word, word => {
        let firstLetter;
        if (word[0] === word[0].toUpperCase()) {
            firstLetter = newWord[0].toUpperCase();
        } else {
            firstLetter = newWord[0].toLowerCase();
        }
        return firstLetter + newWord.slice(1);
    })
}

console.log(searchReplace("He is Sleeping on the couch", "Sleeping", "sitting"));