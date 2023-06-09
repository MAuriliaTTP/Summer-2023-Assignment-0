function sumOfNumsWithinARange(nums, start, end) {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= start && nums[i] <= end) {
      count++;
    }
  }
  return count;
}

console.log(sumOfNumsWithinARange([0,1,2,3,4,5,6,7,8,9,10], 4, 6));
module.exports = sumOfNumsWithinARange;