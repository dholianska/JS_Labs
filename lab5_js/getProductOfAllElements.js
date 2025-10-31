function getProductOfAllElementsAtProperty(obj, key) {
  var array = obj[key];

  // 1. Перевірка, чи властивість існує, чи є масивом і чи не порожня.
  if (!array || !Array.isArray(array) || array.length === 0) {
    return 0;
  }

  // 2. Обчислення добутку.
  var product = 1;
  for (var i = 0; i < array.length; i++) {
    product *= array[i];
  }

  return product;
}

var obj = {
  key: [1, 2, 3, 4]
};
var output = getProductOfAllElementsAtProperty(obj, 'key');
console.log(output);