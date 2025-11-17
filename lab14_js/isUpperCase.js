/**
 * @param {string} str - рядок для валідації.
 */
function upperCase(str) {
    if (!str || str.length === 0) {
        console.log("Empty string provided.");
        return;
    }

    const firstChar = str[0];

    const isLetter = (firstChar.toLowerCase() !== firstChar.toUpperCase());

    if (isLetter && firstChar === firstChar.toUpperCase()) {
        console.log(`String's starts with uppercase character`);
    } else {
        console.log(`String's not starts with uppercase character`);
    }
}

upperCase('regexp');  
upperCase('RegExp');  
upperCase('JavaScript');
upperCase('123number');
upperCase('');        