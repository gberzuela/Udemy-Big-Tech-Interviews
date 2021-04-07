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
My solution

Sort the 

Time:  O(n*log(n)) b/c of sorting
Space: O(k) b/c of k recursive calls
*/
const kthLargestElement = (nums, k) => {
  nums.sort((a, b) => a - b);
  return nums[nums.length - k];
};

/*
  Optimizing
  
  Time:  O()
  Space: O()
  */
// const kthLargestElement = (nums, k) => {
//     return false
// }

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

// // Test 4
// nums = ;
// k = ;
// Result = kthLargestElement(nums, k);
// console.log({ Inputs: { nums, k }, Result, Expected: 0 });
// console.log("------------");

// // Test 5
// nums = ;
// k = ;
// Result = kthLargestElement(nums, k);
// console.log({ Inputs: { nums, k }, Result, Expected: 0 });
// console.log("------------");
