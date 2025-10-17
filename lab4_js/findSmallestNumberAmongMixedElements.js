/**
 * @param {Array<any>} arr
 * @returns {number}
 */
function findSmallestNumberAmongMixedElements(arr) {
  if (arr.length === 0) {
    return 0;
  }

  const numbers = [];

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];

    if (typeof element === 'number') {
      numbers.push(element);
    }
  }

  if (numbers.length === 0) {
    return 0;
  }

  let smallest = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    const currentNumber = numbers[i];

    if (currentNumber < smallest) {
      smallest = currentNumber;
    }
  }

  return smallest;
}

var output = findSmallestNumberAmongMixedElements([4, "lincoln", 9, "octopus"]);
console.log(output); // --> 4

console.log(findSmallestNumberAmongMixedElements(['a', 'b', 'c']));  // --> 0 (Не містить чисел)
console.log(findSmallestNumberAmongMixedElements([10, 5, 20]));     // --> 5
console.log(findSmallestNumberAmongMixedElements([]));              // --> 0 (Порожній масив)