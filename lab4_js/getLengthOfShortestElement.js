/**
 * @param {string[]} arr
 * @returns {number}
 */
function getLengthOfShortestElement(arr) {
  
  if (arr.length === 0) {
    return 0;
  }

  let minLength = arr[0].length;

  for (let i = 1; i < arr.length; i++) {
    const currentLength = arr[i].length;

    if (currentLength < minLength) {
      minLength = currentLength;
    }
  }

  return minLength;
}

var output = getLengthOfShortestElement(["one", "two", "three"]);
console.log(output); // --> 3 (довжина слова "two")