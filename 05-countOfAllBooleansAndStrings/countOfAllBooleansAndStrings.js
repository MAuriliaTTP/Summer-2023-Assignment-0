function countOfAllBooleansAndStrings(arr) {
  let booleanCount = 0;
  let stringCount = 0;

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'boolean') {
      booleanCount++;
    } else if (typeof arr[i] === 'string') {
      stringCount++;
    }
  }

  return booleanCount + stringCount;
}

console.log(countOfAllBooleansAndStrings(["Francisco", true, 11, "HR"]));
// Do not edit this line;
module.exports = countOfAllBooleansAndStrings;