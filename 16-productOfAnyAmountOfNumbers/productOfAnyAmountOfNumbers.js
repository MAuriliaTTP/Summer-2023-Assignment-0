function productOfAnyAmountOfNumbers(...args) {
  if (args.length === 0) {
    return 0;
  }
  let product = 1;
  for (let i = 0; i < args.length; i++) {
    product *= args[i];
  }
  return product;
}

const result1 = productOfAnyAmountOfNumbers(2, 3, 4);
console.log("Result 1:", result1);

const result2 = productOfAnyAmountOfNumbers(5, 10, 2, 8);
console.log("Result 2:", result2);

const result3 = productOfAnyAmountOfNumbers();
console.log("Result 3:", result3);
// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;