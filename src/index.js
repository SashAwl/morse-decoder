const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};


function decode(expr) {
    const wordList = expr.split('**********');
    return wordList.map(word => {
        let letterCodeList = [];
        while (word.length) {
            letterCodeList.push(word.slice(0, 10));
            word = word.slice(10);
        }
        return letterCodeList.map(codeItem => {
            const convertMorseSymbol = (+codeItem)
                .toString()
                .replace(/11/g, '-')
                .replace(/10/g, '.')
            return MORSE_TABLE[convertMorseSymbol]
        }).join('')
    }).join(' ');
}

module.exports = {
    decode
}