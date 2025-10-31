function detectOutlierValue(str) {
  var numbers = str.split(' ').map(function(item) {
    return parseInt(item, 10);
  });

  var even = [];
  var odd = [];

  for (var i = 0; i < numbers.length; i++) {
    var num = numbers[i];
    if (num % 2 === 0) {
      even.push({
        value: num,
        index: i + 1
      });
    } else {
      odd.push({
        value: num,
        index: i + 1
      });
    }
  }

  if (even.length === 1) {
    return even[0].index;
  } else if (odd.length === 1) {
    return odd[0].index;
  } else {
  }
}

var output1 = detectOutlierValue("2 4 7 8 10");
console.log(output1); // --> 3

var output2 = detectOutlierValue("1 10 1 1");
console.log(output2); // --> 2