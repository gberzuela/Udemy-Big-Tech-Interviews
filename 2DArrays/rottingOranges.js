/*
Given a 2D array containing 0's (emtpy cell), 1's (fresh orange) and 2's (rotten orange). Every minute, all fresh orange immediately adjacent (4 directions) to rotten oranges will rot.

How many minutes must pass until all oranges are rotten?

Constraints:
- What do we return if it's not possible?
    - Return -1
- What do we return if there are no oranges?
    - 0
*/

/**
 *
 * @param {Number[][]} grid containing 0, 1, and 2
 * @returns {Number} representing the number of minutes it will take to rot all fresh oranges
 */

/*
Udemy solution - My implementation
Sequential order:
- Find all rotting oranges
- Keep track of fresh oranges
Initialize minutes = 0
BFS
- Process all the current rotting oranges
    - For each rotting orange:
        - Get all of its fresh orange neighbors and replace them with 2 (they are now rotten)
        - Add the fresh orange coord into queue
        - Decrement the total number of fresh oranges
- Once we have processed a "level" of rotting oranges, increment the minutes
If there are fresh oranges left, return -1
If minutes have passed, return the minutes - 1 b/c we don't want to count the last "level" of rotting
Else, return 0

Time:  O(row * col)
Space: O(row * col) worst case is the grid is full of rotten oranges
*/

const directions = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

const rottingOranges = (grid) => {
  let { rotting, fresh } = countOranges(grid);
  let minutes = 0;

  while (rotting.length) {
    // The number of rotten oranges at a certain "level" to process
    const length = rotting.length;

    for (let i = 0; i < length; i++) {
      const [row, col] = rotting.shift();

      for (let direction of directions) {
        const [newRow, newCol] = [row + direction[0], col + direction[1]];

        // Check if the new coords are in bounds and if it's a fresh orange
        if (
          newRow >= 0 &&
          newRow < grid.length &&
          newCol >= 0 &&
          newCol < grid[newRow].length &&
          grid[newRow][newCol] === 1
        ) {
          grid[newRow][newCol] = 2;
          rotting.push([newRow, newCol]);
          fresh--;
        }
      }
    }

    minutes++;
  }

  if (fresh) return -1;
  if (minutes) return minutes - 1;
  return 0;
};

const countOranges = (grid) => {
  const result = { rotting: [], fresh: 0 };

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      if (grid[row][col] === 1) result.fresh++;
      if (grid[row][col] === 2) result.rotting.push([row, col]);
    }
  }

  return result;
};

/*
  Optimizing
  
  Time:  O()
  Space: O()
  */
// const rottingOranges = (grid) => {
//     return false
// }

// Test 1
let grid = [
  [2, 0, 1, 0, 0],
  [1, 1, 0, 0, 2],
  [0, 1, 1, 1, 1],
  [0, 1, 0, 0, 1],
];
let Result = rottingOranges(grid);
console.log({ Inputs: { grid }, Result, Expected: -1 });
console.log("------------");

// Test 2
grid = [
  [2, 1, 1, 0, 0],
  [1, 1, 1, 0, 0],
  [0, 1, 1, 1, 1],
  [0, 1, 0, 0, 1],
];
Result = rottingOranges(grid);
console.log({ Inputs: { grid }, Result, Expected: 7 });
console.log("------------");

// Test 3
grid = [
  [2, 1, 1, 1, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 2, 1, 1],
  [1, 1, 1, 1, 1],
];
Result = rottingOranges(grid);
console.log({ Inputs: { grid }, Result, Expected: 4 });
console.log("------------");

// Test 4
grid = [
  [1, 1, 0, 0, 0],
  [2, 1, 0, 0, 0],
  [0, 0, 0, 1, 2],
  [0, 1, 0, 0, 1],
];
Result = rottingOranges(grid);
console.log({ Inputs: { grid }, Result, Expected: -1 });
console.log("------------");

// Test 5
grid = [];
Result = rottingOranges(grid);
console.log({ Inputs: { grid }, Result, Expected: 0 });
console.log("------------");

// Test 6
grid = [[], []];
Result = rottingOranges(grid);
console.log({ Inputs: { grid }, Result, Expected: 0 });
console.log("------------");
