function findMinLengthOfThreeWords_Conditional(word1, word2, word3) {
  const len1 = word1.length;
  const len2 = word2.length;
  const len3 = word3.length;

  let minLength = len1;

  if (len2 < minLength) {
    minLength = len2;
  }

  if (len3 < minLength) {
    minLength = len3;
  }

  return minLength;
}

console.log(findMinLengthOfThreeWords_Conditional('a', 'pe', 'see'));