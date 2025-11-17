function validateCardFormat(cardNumber) {
    const cardRegex = /^(\d{4})-(\d{4})-(\d{4})-(\d{4})$/;

    return cardRegex.test(cardNumber);
}

const validCard1 = "1234-5678-9012-3456";
const validCard2 = "0000-1111-2222-3333";
const invalidCardTooShort = "1234-5678-9012-345"; // Не вистачає цифри
const invalidCardWrongSeparator = "1234 5678 9012 3456"; // Невірний розділювач (пробіл замість дефіса)
const invalidCardContainsLetters = "ABCD-5678-9012-3456"; // Містить літери

console.log(`Валідація "${validCard1}": ${validateCardFormat(validCard1)}`);
console.log(`Валідація "${validCard2}": ${validateCardFormat(validCard2)}`);
console.log(`Валідація "${invalidCardTooShort}": ${validateCardFormat(invalidCardTooShort)}`);
console.log(`Валідація "${invalidCardWrongSeparator}": ${validateCardFormat(invalidCardWrongSeparator)}`);
console.log(`Валідація "${invalidCardContainsLetters}": ${validateCardFormat(invalidCardContainsLetters)}`);