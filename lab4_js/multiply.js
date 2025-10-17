/**
 * @param {number} num1 
 * @param {number} num2 
 * @returns {number}
 */
function multiply(num1, num2) {
  let result = 0;

  if (num1 === 0 || num2 === 0) {
    return 0;
  }

  const isNegative = (num1 < 0 && num2 > 0) || (num1 > 0 && num2 < 0);

  const absNum1 = Math.abs(num1);
  const absNum2 = Math.abs(num2);

  for (let i = 0; i < absNum2; i++) {
    result += absNum1;
  }

  if (isNegative) {
    return -result;
  } else {
    return result;
  }
}

var output = multiply(4, 7);
console.log(output); // --> 28