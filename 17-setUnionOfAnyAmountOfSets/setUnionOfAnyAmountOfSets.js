function setUnionOfAnyAmountOfSets(...args) {
  const unionSet = new Set();

  for (let i = 0; i < args.length; i++) {
    const set = args[i];

    set.forEach((value) => {
      unionSet.add(value);
    });
  }

  return unionSet;
}


const set1 = new Set([1, 2, 3]);
const set2 = new Set([2, 3, 4]);
const set3 = new Set([3, 4, 5]);

const result = setUnionOfAnyAmountOfSets(set1, set2, set3);
console.log("Union Set:", result);
module.exports = setUnionOfAnyAmountOfSets;