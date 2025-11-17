function checkEmail(email) {
    const emailRegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    
    return emailRegExp.test(email);
}

console.log("--- Тестування функції checkEmail() ---");

console.log(`"Qmail2@gmail.com": ${checkEmail("Qmail2@gmail.com")}`); // true
console.log(`"user.name-123@sub.domain.co": ${checkEmail("user.name-123@sub.domain.co")}`); // true
console.log(`"test@local.net": ${checkEmail("test@local.net")}`); // true

console.log(`"invalid_email.com": ${checkEmail("invalid_email.com")}`); // false (немає @)
console.log(`"user@domain": ${checkEmail("user@domain")}`); // false (немає зони .xx)
console.log(`"@domain.com": ${checkEmail("@domain.com")}`); // false (немає частини до @)
console.log(`"user@.com": ${checkEmail("user@.com")}`); // false (невалідний домен)