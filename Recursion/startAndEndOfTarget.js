const binarySearch = require("./binarySearch");

/*
Given an array of integers sorted in ascending order, return the starting and ending index of a given target value in an array, i.e. [x, y]

Your solution should run in O(log(n)) time.

Constraints:
- What do we return if the target is not found in the array?
    - Return [-1, -1], all values in the array are positive
*/

/**
 *
 * @param {Number[]} nums sorted array of integers in ascending order
 * @param {Number} target
 * @returns a array of integers that represent the starting and ending index of the given target value
 */

/*
Udemy solution

Time:  O(3 * log(n)) => O(log(n))
Space: O(1)
*/
const startAndEndOfTarget = (nums, target) => {
  const length = nums.length;

  // Edge case: input is empty
  if (!length) return [-1, -1];

  // First occurence of target
  const first = binarySearch(nums, target, 0, length - 1);
  // Edge case: target does not exist
  if (first === -1) return [-1, -1];

  let start = first,
    end = first,
    temp;

  /* 
  Temporarily store the first occurence of the target
  While the target exists on the left/right side
    store the next occurence and search the left/right side of it
  */
  while (start !== -1) {
    temp = start;
    start = binarySearch(nums, target, 0, start - 1);
  }
  start = temp;

  while (end !== -1) {
    temp = end;
    end = binarySearch(nums, target, end + 1, length - 1);
  }
  end = temp;

  return [start, end];
};

// Test 1
let nums = [1, 3, 3, 5, 5, 5, 8, 9];
let target = 5;
let Result = startAndEndOfTarget(nums, target);
console.log({ Inputs: { nums, target }, Result, Expected: [3, 5] });
console.log("------------");

// Test 2
nums = [1, 2, 3, 4, 5, 6];
target = 4;
Result = startAndEndOfTarget(nums, target);
console.log({ Inputs: { nums, target }, Result, Expected: [3, 3] });
console.log("------------");

// Test 3
nums = [1, 2, 3, 4, 5];
target = 9;
Result = startAndEndOfTarget(nums, target);
console.log({ Inputs: { nums, target }, Result, Expected: [-1, -1] });
console.log("------------");

// Test 4
nums = [];
target = 3;
Result = startAndEndOfTarget(nums, target);
console.log({ Inputs: { nums, target }, Result, Expected: [-1, -1] });
console.log("------------");
