const quickSort = require("../Sorting/quickSort");

/*
Given an unsorted array, return the kth largest element. It is the kth largest element in sorted order, not the kth distinct element.

Constraints:
- Can we get an array where k is larger than the array length?
    - No, assume an answer is always available.
*/

/**
 *
 * @param {Number[]} nums unsorted array of numbers
 * @param {Number} k
 * @returns the kth largest element
 */

/*
Time:  O(n*log(n)) b/c of sorting
Space: O(log(n)) b/c of quickSort recursive calls
*/
const kthLargestElement = (nums, k) => {
  quickSort(nums, 0, nums.length - 1);
  return nums[nums.length - k];
};

// Test 1
let nums = [5, 3, 1, 6, 4, 2];
let k = 2;
let Result = kthLargestElement(nums, k);
console.log({ Inputs: { nums, k }, Result, Expected: 5 });
console.log("------------");

// Test 2
nums = [2, 3, 1, 2, 4, 2];
k = 4;
Result = kthLargestElement(nums, k);
console.log({ Inputs: { nums, k }, Result, Expected: 2 });
console.log("------------");

// Test 3
nums = [3];
k = 1;
Result = kthLargestElement(nums, k);
console.log({ Inputs: { nums, k }, Result, Expected: 3 });
console.log("------------");
