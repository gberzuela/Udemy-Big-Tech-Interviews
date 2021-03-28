/*
Given an array of integers representing an elevation map where the width of each bar is 1, return how much rainwater can be trapped.

Contraints:
- Do the left and right sides of the graph count as walls?
    - No
- Will there be negative integers?
    - No, all positive
*/

/**
 *
 * @param {Number[]} heights array of positive integers representing an elevation map
 * @returns an integer representing how much rainwater can be trapped
 */

/*
Brute Force

For every height, find the tallest elevation from the left and right side of the current wall
The amount of rainwater we can trap at any given index is the min of either wall - current value

Time:  O(n^2)
Space: O(1)
*/
// const trappingRainwater = (heights) => {
//   let result = 0;

//   for (let i = 1; i < heights.length; i++) {
//     // const leftWall = Math.max(...heights.slice(0, i + 1)); // Math.max and slice are both O(n)
//     // const rightWall = Math.max(...heights.slice(i));
//     const leftWall = findWall(heights, i, true);
//     const rightWall = findWall(heights, i, false);
//     result += Math.min(leftWall, rightWall) - heights[i];
//   }

//   return result;
// };

// const findWall = (heights, index, leftWall) => {
//   let start = leftWall ? 0 : index;
//   let end = leftWall ? index + 1 : heights.length;
//   let result = 0;

//   for (start; start < end; start++) {
//     result = Math.max(result, heights[start]);
//   }

//   return result;
// };

/*
Optimizing

Two Pointer:
- start at both ends of the input
- Figure out which pointer has the lesser value
- Is that pointer >= to the max of that side?
    - Yes; update max for that side
    - No; get water and update result
- Move pointer inward

Time:  O(n)
Space: O(1)
*/
const trappingRainwater = (heights) => {
  let leftWall = 0;
  let rightWall = 0;
  let leftPointer = 0;
  let rightPointer = heights.length - 1;
  let result = 0;

  while (leftPointer < rightPointer) {
    const leftSmaller = heights[leftPointer] < heights[rightPointer];
    if (leftSmaller) {
      if (heights[leftPointer] >= leftWall) {
        leftWall = heights[leftPointer];
      } else {
        result += leftWall - heights[leftPointer];
      }
      leftPointer++;
    } else {
      if (heights[rightPointer] >= rightWall) {
        rightWall = heights[rightPointer];
      } else {
        result += rightWall - heights[rightPointer];
      }
      rightPointer--;
    }
  }

  return result;
};

// Example 1
let heights = [0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2];
let Result = trappingRainwater(heights);
console.log({ Inputs: { heights }, Result, Expected: 8 });

// Example 2
heights = [];
Result = trappingRainwater(heights);
console.log({ Inputs: { heights }, Result, Expected: 0 });

// Example 3
heights = [3];
Result = trappingRainwater(heights);
console.log({ Inputs: { heights }, Result, Expected: 0 });

// Example 4
heights = [3, 4, 4];
Result = trappingRainwater(heights);
console.log({ Inputs: { heights }, Result, Expected: 0 });

// Example 5
heights = [4, 2, 0, 3, 2, 5];
Result = trappingRainwater(heights);
console.log({ Inputs: { heights }, Result, Expected: 9 });

// Example 6
heights = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
Result = trappingRainwater(heights);
console.log({ Inputs: { heights }, Result, Expected: 6 });
