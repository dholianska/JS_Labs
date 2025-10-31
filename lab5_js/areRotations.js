function areRotations(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  if (str1.length === 0) {
    return true;
  }

  var concatenatedStr = str1 + str1;
    return concatenatedStr.includes(str2);
}

var str1 = 'hello world';
var str2 = 'orldhello w';
var output = areRotations(str1, str2);
console.log(output);