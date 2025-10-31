function findSmallestNumberAmongMixedElements(arr) {
  var numbers = arr.filter(function(element) {
    return typeof element === 'number';
  });

  if (numbers.length === 0) {
    return '';
  }

  return Math.min(...numbers);
}

var output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
console.log(output);