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
const containerWithMostWater = (heights) => {
  let currentMax = 0;

  for (let i = 0; i < heights.length - 1; i++) {
    for (let j = i + 1; j < heights.length; j++) {
      const min = Math.min(heights[i], heights[j]);
      const currentArea = min * (j - i);
      currentMax = Math.max(currentMax, currentArea);
    }
  }

  return currentMax;
};

// Example 1
let heights = [7, 1, 2, 3, 9];
let result = containerWithMostWater(heights);
console.log(`Inputs: heights = `, heights);
console.log("Result: ", result);
console.log("Expected: 28\n------------");

// Example 2
heights = [];
result = containerWithMostWater(heights);
console.log(`Inputs: heights = `, heights);
console.log("Result: ", result);
console.log("Expected: 0\n------------");

// Example 3
heights = [7];
result = containerWithMostWater(heights);
console.log(`Inputs: heights = `, heights);
console.log("Result: ", result);
console.log("Expected: 0\n------------");

// Example 4
heights = [7, 10];
result = containerWithMostWater(heights);
console.log(`Inputs: heights = `, heights);
console.log("Result: ", result);
console.log("Expected: 7\n------------");

// Example 5
heights = [6, 9, 3, 4, 5, 8];
result = containerWithMostWater(heights);
console.log(`Inputs: heights = `, heights);
console.log("Result: ", result);
console.log("Expected: 32\n------------");
