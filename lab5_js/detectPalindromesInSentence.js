function detectPalindromesInSentence(sentence) {
  var cleanedSentence = sentence.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
  
  var words = cleanedSentence.toLowerCase().split(/\s+/);

  var palindromes = [];

  function isPalindrome(word) {
    if (word.length < 2) {
      return false; 
    }
    return word === word.split('').reverse().join('');
  }
  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    if (isPalindrome(word)) {
      palindromes.push(word);
    }
  }

  return palindromes;
}

var output1 = detectPalindromesInSentence("Мадам сказала, що тут є гарний ротор."); 
console.log(output1); // --> ["мадам", "тут", "ротор"]