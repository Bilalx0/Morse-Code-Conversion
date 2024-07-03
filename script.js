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

function switchTexts() {
    let textArea1 = document.getElementById('english-textarea');
    let textArea2 = document.getElementById('morse-textarea');
    let label1 = document.getElementById('label-1');
    let label2 = document.getElementById('label-2');

    // Swap text area values
    let tempText = textArea1.value;
    textArea1.value = textArea2.value;
    textArea2.value = tempText;

    // Swap text area functionalities
    let tempOninput = textArea1.getAttribute('oninput');
    textArea1.setAttribute('oninput', textArea2.getAttribute('oninput'));
    textArea2.setAttribute('oninput', tempOninput);

    // Swap labels
    let tempLabel = label1.innerText;
    label1.innerText = label2.innerText;
    label2.innerText = tempLabel;

    // Ensure both text areas are editable
    textArea1.removeAttribute('readonly');
    textArea2.removeAttribute('readonly');

 // Toggle the oninput functions
 textArea1.oninput = textArea1.oninput === changeEnglishText ? changeMorseCode : changeEnglishText;
 textArea2.oninput = textArea2.oninput === changeMorseCode ? changeEnglishText : changeMorseCode;
}