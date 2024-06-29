
let morseCodeArr = {
    'A': '·−', 'B': '−···', 'C': '−·−·', 'D': '−··', 'E': '·', 'F': '··−·',
    'G': '−−·', 'H': '····', 'I': '··', 'J': '·−−−', 'K': '−·−', 'L': '·−··',
    'M': '−−', 'N': '−·', 'O': '−−−', 'P': '·−−·', 'Q': '−−·−', 'R': '·−·',
    'S': '···', 'T': '−', 'U': '··−', 'V': '···−', 'W': '·−−', 'X': '−··−',
    'Y': '−·−−', 'Z': '−−··',
    '0': '−−−−−', '1': '·−−−−', '2': '··−−−', '3': '···−−', '4': '····−',
    '5': '·····', '6': '−····', '7': '−−···', '8': '−−−··', '9': '−−−−·',
    ' ': ' '
};

function changeEnglishText() {
    const englishTextValue = document.getElementById('english-textarea').value.toUpperCase();
    let morseCodes = "";
    for (let i = 0; i < englishTextValue.length; i++) {
        let englishChar = englishTextValue[i];
        if (morseCodeArr[englishChar]) {
            morseCodes += morseCodeArr[englishChar] + " ";
        } else {
            morseCodes += englishChar;
        }
    }
    // console.log(morseCodes); Optional for Debuging
    document.getElementById('morse-textarea').value = morseCodes;
}

function changeMorseCode() {
    const morseCodeValue = document.getElementById('morse-textarea').value.trim();
    let englishText = "";
    let morseWords = morseCodeValue.split(' / ');

    morseWords.forEach(morseWord => {
        let morseChars = morseWord.split(' ');
        morseChars.forEach(morseChar => {
            let englishChar = Object.keys(morseCodeArr).find(key => morseCodeArr[key] === morseChar);
            if (englishChar) {
                englishText += englishChar;
            } else {
                englishText += ' ';
            }
        });
        englishText += ' ';
    });

    document.getElementById('english-textarea').value = englishText.trim();
}
