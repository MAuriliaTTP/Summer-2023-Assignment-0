class MySolution {
  binarySearch(nums, target) {
    const search = (arr, start, end, target) => {
      if (start > end) {
        return false;
      }

      const mid = Math.floor((start + end) / 2);

      if (arr[mid] === target) {
        return true;
      }

      if (target < arr[mid]) {
        return search(arr, start, mid - 1, target);
      } else {
        return search(arr, mid + 1, end, target);
      }
    };

    return search(nums, 0, nums.length - 1, target);
  }
}

const mySolution = new MySolution();
const numbers = [2, 5, 8, 12, 16, 23, 38, 56, 72];
const target = 23;

const isFound = mySolution.binarySearch(numbers, target);
console.log("Is found:", isFound);
// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;