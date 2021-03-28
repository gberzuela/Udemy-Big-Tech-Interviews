/*
You are given an array of positive integers where each integer represents the height of a vertical line on a chart. Find two lines which together with the x-axis forms a container that would hold the greatest amount of water. Return the area of water it would hold.

Constraints:
- Does the thickness of the lines affect the area?
    - No
- Do the left and right sides of the graph count as wells?
    - No, we have to use a value inside the array to form a container
- Can we pick two values if one value is higher in the middle?
    - Yes
*/

/**
 *
 * @param {Number[]} heights array of positive integers where each integer represents the height of a vertical line on a chart
 * @returns an integer representing the area of water these heights could contain
 */

/*
Brute Force

Calculate all possibles areas

Time:  O(n^2)
Space: O(1)
*/
// const containerWithMostWater = (heights) => {
//   let currentMax = 0;

//   for (let i = 0; i < heights.length - 1; i++) {
//     for (let j = i + 1; j < heights.length; j++) {
//       const height = Math.min(heights[i], heights[j]);
//       const width = j - i;
//       const currentArea = width * height;
//       currentMax = Math.max(currentMax, currentArea);
//     }
//   }

//   return currentMax;
// };

/*
Optimizing

Two pointer: 
- start at both ends of the input and calculate the area
- move the pointer with the minimum value

The result is directly related to the minimum value between two elements as well as the width
If we begin at both ends, moving the lesser of the two and hoping for the next value to be greater
    is the best way to find a greater area

Time:  O(n)
Space: O(1)
*/
const containerWithMostWater = (heights) => {
  let currentMax = 0;
  let left = 0;
  let right = heights.length - 1;

  while (left < right) {
    const height = Math.min(heights[left], heights[right]);
    const width = right - left;
    const currentArea = width * height;
    currentMax = Math.max(currentMax, currentArea);
    if (heights[left] < heights[right]) left++;
    else right--;
  }
  return currentMax;
};

// Example 1
let heights = [7, 1, 2, 3, 9];
let Result = containerWithMostWater(heights);
console.log({ Inputs: { heights }, Result, Expected: 28 });
console.log("------------");

// Example 2
heights = [];
Result = containerWithMostWater(heights);
console.log({ Inputs: { heights }, Result, Expected: 0 });
console.log("------------");

// Example 3
heights = [7];
Result = containerWithMostWater(heights);
console.log({ Inputs: { heights }, Result, Expected: 0 });
console.log("------------");

// Example 4
heights = [7, 10];
Result = containerWithMostWater(heights);
console.log({ Inputs: { heights }, Result, Expected: 7 });
console.log("------------");

// Example 5
heights = [6, 9, 3, 4, 5, 8];
Result = containerWithMostWater(heights);
console.log({ Inputs: { heights }, Result, Expected: 32 });
console.log("------------");

// Example 6
heights = [4, 8, 1, 2, 3, 9];
Result = containerWithMostWater(heights);
console.log({ Inputs: { heights }, Result, Expected: 32 });
console.log("------------");
