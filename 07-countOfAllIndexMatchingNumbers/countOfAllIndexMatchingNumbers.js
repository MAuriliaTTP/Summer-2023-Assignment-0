function countOfAllIndexMatchingNumbers(nums) {
    let count = 0;

  for (let i = 0; i < nums.length; i++) {
      if (nums[i] == i) {
          count++;
      }
  }
  return count;
}

console.log(countOfAllIndexMatchingNumbers([0,1,3,3,5,7,10]));
// Do not edit this line;
module.exports = countOfAllIndexMatchingNumbers;