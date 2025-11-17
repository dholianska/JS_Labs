function checkLogin(login) {
    let validationResult = false;

    const loginFormatRegex = /^[a-zA-Z][a-zA-Z0-9]{1,9}$/;

    validationResult = loginFormatRegex.test(login);
    const numberSearchRegex = /\d+(?:\.\d+)?/g;

    const foundNumbers = login.match(numberSearchRegex);

    const numberList = foundNumbers ? foundNumbers.join(', ') : 'Не знайдено';

    console.log(`checkLogin('${login}');`);
    console.log(validationResult);
    console.log(numberList);
    console.log('\n---');

    return validationResult;
}

checkLogin('ee1.1ret3');     // Коректний логін, числа 1.1, 3
checkLogin('ee1*1ret3');     // Некоректний логін (заборонений символ '*'), числа 1, 1, 3
checkLogin('123login');      // Некоректний логін (починається з числа), число 123
checkLogin('short');         // Коректний логін
checkLogin('toolongstring1'); // Некоректний логін (довжина 11)
checkLogin('a3.14b');        // Коректний логін, число 3.14
checkLogin('a.b');           // Некоректний логін (заборонений символ '.')