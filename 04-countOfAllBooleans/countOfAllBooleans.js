function countOfAllBooleans(arr) {
    let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'boolean') {
      count++;
    }
  }

  return count;
}

console.log(countOfAllBooleans(['hello', 123, true]));
// Do not edit this line;
module.exports = countOfAllBooleans;