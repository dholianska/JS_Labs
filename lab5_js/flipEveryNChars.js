function flipEveryNChars(input, n) {
  var result = '';
  var i = 0;

  while (i < input.length) {
    var chunk = input.substring(i, i + n);

    var flippedChunk = chunk.split('').reverse().join('');

    result += flippedChunk;

    i += n;
  }

  return result;
}

var input = 'a short example';
var output = flipEveryNChars(input, 5);
console.log(output);