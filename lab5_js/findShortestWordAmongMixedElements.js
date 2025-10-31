function findShortestWordAmongMixedElements(arr) {
  // 1. Фільтруємо масив, залишаючи лише рядки.
  var words = arr.filter(function(element) {
    return typeof element === 'string';
  });

  // 2. Перевірка умов: порожній масив або відсутність рядкових значень.
  if (words.length === 0) {
    return '';
  }

  // 3. Знаходимо найкоротше слово.
  var shortestWord = words[0];

  for (var i = 1; i < words.length; i++) {
    if (words[i].length < shortestWord.length) {
      shortestWord = words[i];
    }
  }

  return shortestWord;
}

var output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
console.log(output);