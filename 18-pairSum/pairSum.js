function pairSum(nums, target) {
  if (nums.length <= 1) {
    throw new Error("The array must have at least two elements.");
  }

  const numSet = new Set();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (numSet.has(complement)) {
      return true;
    }

    numSet.add(nums[i]);
  }

  return false;
}

const numbers = [2, 4, 6, 8, 10];
const targetSum = 12;

try {
  const hasPairSum = pairSum(numbers, targetSum);
  console.log("Has pair sum:", hasPairSum);
} catch (error) {
  console.error("Error:", error.message);
}
// Do not edit this line;
module.exports = pairSum;