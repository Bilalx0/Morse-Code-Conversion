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

function copyToClipboard() {
    var textToCopy = document.getElementById('morse-textarea').value;
    var tempTextarea = document.createElement('textarea');
    tempTextarea.value = textToCopy;
    document.body.appendChild(tempTextarea);
    tempTextarea.select();
    tempTextarea.setSelectionRange(0, 99999);
    document.execCommand('copy');
    document.body.removeChild(tempTextarea);
    alert('Text copied to clipboard!');
}

function swapElements() {
    // Target main elements for this function
    let span1 = document.getElementById('span1');
    let span2 = document.getElementById('span2');
    let label1 = document.getElementById('label-1');
    let label2 = document.getElementById('label-2');


    // Clone the spans including all attributes and content
    let span1Clone = span1.cloneNode(true);
    let span2Clone = span2.cloneNode(true);

    // Replace the original spans with their clones
    span1.parentNode.replaceChild(span2Clone, span1);
    span2.parentNode.replaceChild(span1Clone, span2);

}
