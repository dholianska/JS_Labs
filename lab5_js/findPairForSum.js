function findPairForSum(array, sum) {
  var seenNumbers = {};

  for (var i = 0; i < array.length; i++) {
    var currentNum = array[i];
    var complement = sum - currentNum;

    if (seenNumbers[complement] !== undefined) {
      return [complement, currentNum];
    }
    seenNumbers[currentNum] = true;
  }
  return [];
}

var pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
console.log(pair);