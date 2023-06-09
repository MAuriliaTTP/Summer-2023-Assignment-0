function countOfAllNumbersSmallerThanTarget(nums, target) {
  let count = 0;
  for (let i = 0; i < nums.length; i++){
      if (nums[i] < target){
          count++;
      }
  }
  return count;
}

console.log(countOfAllNumbersSmallerThanTarget([1,3,9,6,10,5,7], 9))
// Do not edit this line;
module.exports = countOfAllNumbersSmallerThanTarget;