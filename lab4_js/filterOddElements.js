/**
 * Альтернативний варіант з використанням циклу for.
@param {number[]} arr - Вхідний масив чисел.
@returns {number[]} Масив, що містить лише непарні елементи.
 */
function filterOddElements_ForLoop(arr) {
let oddNumbers = [];

  for (let i = 0; i < arr.length; i++) {
    const number = arr[i];

    if (number % 2 !== 0) {
      oddNumbers.push(number);
    }
  }

  return oddNumbers;
}

console.log(filterOddElements_ForLoop([1, 2, 3, 4, 5, 6])); // --> [1, 3, 5]