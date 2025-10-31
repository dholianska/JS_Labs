function modulo(num1, num2) {
 
  if (isNaN(num1) || isNaN(num2) || num2 === 0) {
    return NaN;
  }
  
  if (num1 === 0) {
    return 0;
  }


  var sign = num1 >= 0 ? 1 : -1;

  var absNum1 = Math.abs(num1);
  var absNum2 = Math.abs(num2);
  
  var divisionResult = Math.floor(absNum1 / absNum2);

  var remainder = absNum1 - (absNum2 * divisionResult);

  return remainder * sign;
}

var output1 = modulo(25, 4);
console.log(output1); // 1

var output2 = modulo(-17, 5);
console.log(output2); // -2 (-17 = 5 * (-4) + (-2))

var output3 = modulo(5, 0);
console.log(output3); // NaN