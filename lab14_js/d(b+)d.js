function findPattern(str) {
    const regExp = /d(b+)(d)/i;

    return str.match(regExp);
}

const testString = "cdbBdbsbz";
const result = findPattern(testString);

console.log(`Рядок для пошуку: "${testString}"`);

if (result) {
    console.log(`Результат (Масив): ${JSON.stringify(result)}`);
    console.log(`Повний збіг: ${result[0]}`); // dbBd
    console.log(`Захоплені символи 'b+': ${result[1]}`); // bB
    console.log(`Захоплений символ 'd': ${result[2]}`); // d
} else {
    console.log("Збігів не знайдено.");
}

const testString2 = "XddbBBBDY";
console.log("\n--- Додатковий приклад ---");
console.log(`Рядок для пошуку: "${testString2}"`);
console.log(`Результат (Масив): ${JSON.stringify(findPattern(testString2))}`);
