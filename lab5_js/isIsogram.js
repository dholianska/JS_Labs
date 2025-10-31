function isIsogram(str) {
  var lowerStr = str.toLowerCase();
  var seen = {};

  for (var i = 0; i < lowerStr.length; i++) {
    var char = lowerStr[i];

    if (seen[char]) {
      return false;
    }
    seen[char] = true;
  }

  return true;
}

console.log(isIsogram('Dermatoglyphics')); // true
console.log(isIsogram('programming')); // false