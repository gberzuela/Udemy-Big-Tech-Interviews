/*
Given an array of integers, return the indices of the two numbers that add up to a given target.

Constraints:
- Are all the numbers positive or can there be negative?
    - All positive
- Are there duplicate numbers in the array?
    - No
- Will there always be a solution available?
    - For this solution, yes
    - What to return if there's no solution?
        - Null
- Can there be multiple pairs that add up to the target?
    - No
*/

/**
 *
 * @param {Array} nums array of positive integers
 * @param {Number} target integer to find
 * @returns array of two integers representing the indices whose elements sum to the target or null if no solution is found
 */

/*
Brute Force

Try every possible pair of numbers
*/
const twoSum = (nums, target) => {
  for (let i = 0; i < nums.length + 1; i++) {
    const numberToFind = target - nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      if (numberToFind === nums[j]) return [i, j];
    }
  }

  return null;
};

// Example 1
let nums = [1, 3, 7, 9, 2];
let target = 11;
let result = twoSum(nums, target);
console.log(`Inputs: nums = [${nums}], target = ${target}`);
console.log("Result: ", result);
console.log("Expected: [3, 4]\n------------");

// Example 2
nums = [1, 3, 7, 9, 2];
target = 25;
result = twoSum(nums, target);
console.log(`Inputs: nums = [${nums}], target = ${target}`);
console.log("Result: ", result);
console.log("Expected: null\n------------");

// Example 3
nums = [];
target = 1;
result = twoSum(nums, target);
console.log(`Inputs: nums = [${nums}], target = ${target}`);
console.log("Result: ", result);
console.log("Expected: null\n------------");

// Example 4
nums = [5];
target = 11;
result = twoSum(nums, target);
console.log(`Inputs: nums = [${nums}], target = ${target}`);
console.log("Result: ", result);
console.log("Expected: null\n------------");

// Example 5
nums = [1, 6];
target = 7;
result = twoSum(nums, target);
console.log(`Inputs: nums = [${nums}], target = ${target}`);
console.log("Result: ", result);
console.log("Expected: [0, 1]\n------------");
