function binarySearch(arr, target) {
  var low = 0;
  var high = arr.length - 1;

  while (low <= high) {
    var mid = Math.floor((low + high) / 2);

    if (arr[mid] === target) {
      return mid;
    }
    else if (arr[mid] < target) {
      low = mid + 1;
    }
    else {
      high = mid - 1;
    }
  }

  return -1;
}

var arr = [1, 3, 16, 22, 31, 33, 34];
console.log(binarySearch(arr, 31)); 