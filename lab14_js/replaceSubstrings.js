function swapSubstrings(inputString) {
    const regExp = /(\w+)\s(\w+)/;

    const result = inputString.replace(regExp, '$2, $1');

    return result;
}

const input = "Java Script";
const output = swapSubstrings(input);

console.log(`Вхідний рядок: "${input}"`);
console.log(`Вихідний рядок: "${output}"`);