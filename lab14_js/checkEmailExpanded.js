function checkEmail(email) {
    const emailRegex = new RegExp(
        "^" +
        "[a-zA-Z0-9]" +
        "(?!.*--)" + 
        "[a-zA-Z0-9_\\-]*" +
        "(?:[a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9_\\-]*[a-zA-Z0-9])?" +
        "@" +
        "[a-zA-Z0-9]" +
        "[a-zA-Z0-9-]*" +
        "\\." +
        "[a-zA-Z]{2,}" +
        "$",
        'g'
    );

    if (emailRegex.test(email)) {
        console.log(`checkEmail('${email}');\nEmail is correct!`);
        return true;
    } else {
        console.log(`checkEmail('${email}');\nEmail is not correct!`);
        return false;
    }
}

checkEmail('my_mail@gmail.com');      // Очікується: correct (бо починається з літери, містить "_", без "--")
checkEmail('#my_mail@gmail.com');      // Очікується: not correct (починається з невірних символів)
checkEmail('my_ma--il@gmail.com');     // Очікується: not correct (містить подвійний дефіс)
