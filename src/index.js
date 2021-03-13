
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let result = [];
  if (matrix == undefined || matrix == []) {
    return result;
  }
  let arr = matrix.map((item, index, array) => {
    return index % 2 == 0 ? item : item.reverse();
  });
  arr.forEach(item => result = result.concat(item));
  return result;
}

