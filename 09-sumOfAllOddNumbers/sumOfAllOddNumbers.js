function sumOfAllOddNumbers(nums) {
  let count = 0;

  for (let i = 0; i < nums.length; i++){
      if (nums[i] % 2 != 0){
          count++;
      }
  }
  return count;
}

console.log(sumOfAllOddNumbers([0,2,4,1,3,5]));
// Do not edit this line;
module.exports = sumOfAllOddNumbers;