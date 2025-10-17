/**
 * @param {string} word1
 * @param {string} word2
 * @param {string} word3
 * @returns {string}
 */
function getLongestOfThreeWords(word1, word2, word3) {
  const len1 = word1.length;
  const len2 = word2.length;
  const len3 = word3.length;

  if (len1 >= len2 && len1 >= len3) {
    return word1;
  }
  else if (len2 >= len3) {
    return word2;
  }
  else {
    return word3;
  }
}

var output = getLongestOfThreeWords('these', 'three', 'words');
console.log(output); // --> 'these' (Всі мають довжину 5, word1 має пріоритет)