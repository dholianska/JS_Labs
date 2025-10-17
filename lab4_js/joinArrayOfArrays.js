/**
 * @param {Array<any[]>} arr
 * @returns {any[]}
 */
function joinArrayOfArrays(arr) {
  return arr.reduce((accumulator, currentArray) => {
    return accumulator.concat(currentArray);
  }, []);
}

var output = joinArrayOfArrays([[1, 4], [true, false], ["x", "y"]]);
console.log(output); // --> [1, 4, true, false, 'x', 'y']