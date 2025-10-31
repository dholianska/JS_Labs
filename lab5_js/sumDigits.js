function sumDigits(num) {
  var numStr = String(Math.abs(num));
  var sum = 0;

  for (var i = 0; i < numStr.length; i++) {
    sum += Number(numStr[i]);
  }

  if (num < 0) {
    var firstDigit = Number(numStr[0]);
    sum -= 2 * firstDigit;
  }

  return sum;
}

var output1 = sumDigits(1148);
console.log(output1);

var output2 = sumDigits(-316);
console.log(output2);