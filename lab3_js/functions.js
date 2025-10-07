// =======================
// 5.2.1 getProperty
function getProperty(obj, prop) {
    return obj[prop];
}
// Приклад
var obj1 = { key: 'value' };
console.log(getProperty(obj1, 'key')); // --> 'value'

// =======================
// 5.2.2 addProperty
function addProperty(obj, prop) {
    obj[prop] = true;
    return true;
}
// Приклад
var myObj = {};
addProperty(myObj, "myProperty");
console.log(myObj.myProperty); // --> true

// =======================
// 5.2.3 removeProperty
function removeProperty(obj, prop) {
    delete obj[prop];
}
// Приклад
var obj2 = { name: 'Sam', age: 20 };
removeProperty(obj2, 'name');
console.log(obj2.name); // --> undefined

// =======================
// 5.2.4 getFullName
function getFullName(firstName, lastName) {
    return firstName + " " + lastName;
}
// Приклад
console.log(getFullName('Joe', 'Smith')); // --> 'Joe Smith'

// =======================
// 5.2.5 getLengthOfWord
function getLengthOfWord(word) {
    return word.length;
}
// Приклад
console.log(getLengthOfWord('some')); // --> 4

// =======================
// 5.2.6 getLengthOfTwoWords
function getLengthOfTwoWords(word1, word2) {
    return word1.length + word2.length;
}
// Приклад
console.log(getLengthOfTwoWords('some', 'words')); // --> 9

// =======================
// 5.2.7 isGreaterThan
function isGreaterThan(num1, num2) {
    return num1 > num2;
}
// Приклад
console.log(isGreaterThan(11, 10)); // --> true

// =======================
// 5.2.8 isEven
function isEven(num) {
    return num % 2 === 0;
}
// Приклад
console.log(isEven(11)); // --> false
console.log(isEven(12)); // --> true

// =======================
// 5.2.9 isSameLength
function isSameLength(word1, word2) {
    return word1.length === word2.length;
}
// Приклад
console.log(isSameLength('words', 'super')); // --> true

// =======================
// 5.2.10 isEvenAndGreaterThanTen
function isEvenAndGreaterThanTen(num) {
    return num % 2 === 0 && num > 10;
}
// Приклад
console.log(isEvenAndGreaterThanTen(13)); // --> false
console.log(isEvenAndGreaterThanTen(14)); // --> true

// =======================
// 5.2.11 computeAreaOfATriangle
function computeAreaOfATriangle(base, height) {
    return (base * height) / 2;
}
// Приклад
console.log(computeAreaOfATriangle(4, 6)); // --> 12
