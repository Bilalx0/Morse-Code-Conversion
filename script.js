
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


//  code to make the copy to clipboard functional 
function copyToClipboard() {
    // Get the text from the textarea
    var textToCopy = document.getElementById('morse-textarea').value;
    
    // Create a temporary textarea element
    var tempTextarea = document.createElement('textarea');
    tempTextarea.value = textToCopy;
    document.body.appendChild(tempTextarea);
    
    // Select the text in the textarea
    tempTextarea.select();
    tempTextarea.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text to the clipboard
    document.execCommand('copy');
    
    // Remove the temporary textarea element
    document.body.removeChild(tempTextarea);
    
    // Provide feedback to the user
    alert('Text copied to clipboard!');
}