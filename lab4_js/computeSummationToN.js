/**
 * @param {number} n - Кінцеве число послідовності.
 * @returns {number} Сума чисел від 1 до n.
 */
function computeSummationToN(n) {
  let sum = 0; 

  for (let i = 1; i <= n; i++) {
    sum = sum + i;
  }

  return sum;
}

var output = computeSummationToN(6);
console.log(output); // --> 21 (1 + 2 + 3 + 4 + 5 + 6 = 21)
