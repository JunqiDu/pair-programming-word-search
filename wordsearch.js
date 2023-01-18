const wordSearch = (letters, word) => {
    const horizontalJoin = letters.map(ls => ls.join(''));
    for (l of horizontalJoin) {
        if (l.includes(word)) return true;
    }

    const verticalLetters = [];
    for (let x = 0; x < letters.length; x++) {
        let newRow = '';
        for (let y = letters[x].length; y > 0; y--) {
            newRow += letters[x][y];
        }
        verticalLetters.push(newRow);
    }

    for (v of verticalLetters) {
        if (v.includes(word)) return true;
    }

    return false;
};

module.exports = wordSearch;