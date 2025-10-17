/**
 * @param {number} num1 
 * @param {number} num2 
 * @returns {number}
 */
function computeSumBetween(num1, num2) {
  if (num1 >= num2) {
    return 0;
  }

  let sum = 0;

  for (let i = num1 + 1; i < num2; i++) {
    sum += i;
  }

  return sum;
}

var output = computeSumBetween(2, 5);
console.log(output); 
                     
console.log(`Сума між 2 і 5: ${computeSumBetween(2, 5)}`);   // --> 3 + 4 = 7
console.log(`Сума між 1 і 4: ${computeSumBetween(1, 4)}`);   // --> 2 + 3 = 5
console.log(`Сума між 5 і 5: ${computeSumBetween(5, 5)}`);   // --> 0
console.log(`Сума між 7 і 3: ${computeSumBetween(7, 3)}`);   // --> 0