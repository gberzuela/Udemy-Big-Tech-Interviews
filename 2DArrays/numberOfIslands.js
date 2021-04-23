/*
Given a 2D array containing only 1's (land) and 0's (water), count the number of islands.

An island is land connected horizontally or vertically.

Constraints:
- Are the edges of the 2D array water?
    - Yes, assume anything outside of the 2D array is water.
*/

/**
 *
 * @param {Number[][]} grid
 * @returns
 */

/*
My solution
If the grid is empty, return 0
Initialize result = 0 and a seen adjacency grid
Sequentially iterate through the grid
- if we find a 1 we haven't seen yet
    - bfs
        - Initialize queue with the coordinates of the 1
        - Shift the first value out of the queue
        - Check that the coords are in bounds and we haven't seen it
        - Mark the coords as seen
        - If the value at the coords is 1, push its neighbors into the queue
        - Return 1 because we have processed the island
        
        Time:  O(row * col)
        Space: O(row * col)
        */
const directions = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];
// const numberOfIslands = (grid) => {
//   if (!grid.length) return 0;

//   let result = 0;
//   const seen = new Array(grid.length)
//     .fill(0)
//     .map(() => new Array(grid[0].length).fill(false));

//   for (let row = 0; row < grid.length; row++) {
//     for (let col = 0; col < grid[row].length; col++) {
//       if (grid[row][col] && !seen[row][col])
//         result += bfs(grid, seen, [row, col]);
//     }
//   }

//   return result;
// };

// const bfs = (grid, seen, start) => {

//   const queue = [start];

//   while (queue.length) {
//     const [row, col] = queue.shift();

//     if (
//       row < 0 ||
//       row >= grid.length ||
//       col < 0 ||
//       col >= grid[0].length ||
//       seen[row][col]
//     ) {
//       continue;
//     }

//     seen[row][col] = true;

//     if (grid[row][col]) {
//       for (let direction of directions) {
//         const newRow = row + direction[0];
//         const newCol = col + direction[1];

//         queue.push([newRow, newCol]);
//       }
//     }
//   }

//   return 1;
// };

/*
Udemy BFS Solution

Time:  O(row * col)
Space: O(max(row, col)) queue will hold at most, the number of values === the length of the diagonal
*/
// const numberOfIslands = (grid) => {
//   if (!grid.length) return 0;

//   let result = 0;

//   for (let row = 0; row < grid.length; row++) {
//     for (let col = 0; col < grid[0].length; col++) {
//       if (grid[row][col]) {
//         result++;
//         grid[row][col] = 0;
//         const queue = [[row, col]];

//         while (queue.length) {
//           const [currRow, currCol] = queue.shift();

//           for (let direction of directions) {
//             const [nextRow, nextCol] = [
//               currRow + direction[0],
//               currCol + direction[1],
//             ];

//             if (
//               nextRow < 0 ||
//               nextRow >= grid.length ||
//               nextCol < 0 ||
//               nextCol >= grid[0].length
//             )
//               continue;

//             if (grid[nextRow][nextCol]) {
//               queue.push([nextRow, nextCol]);
//               grid[nextRow][nextCol] = 0;
//             }
//           }
//         }
//       }
//     }
//   }

//   return result;
// };

/*
Udemy DFS Solution

Time:  O(row * col)
Space: O(row * col) b/c callstack
*/
const numberOfIslands = (grid) => {
  if (!grid.length) return 0;

  let result = 0;

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      if (grid[row][col] === 1) {
        result++;
        dfs(grid, [row, col]);
      }
    }
  }

  return result;
};

const dfs = (grid, start) => {
  const [row, col] = start;

  if (row < 0 || row >= grid.length || col < 0 || col >= grid[row].length)
    return;

  if (grid[row][col]) {
    grid[row][col] = 0;

    for (let direction of directions) {
      dfs(grid, [row + direction[0], col + direction[1]]);
    }
  }
};

// Test 1
let grid = [
  [1, 1, 1, 1, 0],
  [1, 1, 0, 1, 0],
  [1, 1, 0, 0, 1],
  [0, 0, 0, 1, 1],
];
let Result = numberOfIslands(grid);
console.log({ Inputs: { grid }, Result, Expected: 2 });
console.log("------------");

// Test 2
grid = [
  [0, 1, 0, 1, 0],
  [1, 0, 1, 0, 1],
  [0, 1, 1, 1, 0],
  [1, 0, 1, 0, 1],
];
Result = numberOfIslands(grid);
console.log({ Inputs: { grid }, Result, Expected: 7 });
console.log("------------");

// Test 3
grid = [];
Result = numberOfIslands(grid);
console.log({ Inputs: { grid }, Result, Expected: 0 });
console.log("------------");

// Test 4
grid = [[], []];
Result = numberOfIslands(grid);
console.log({ Inputs: { grid }, Result, Expected: 0 });
console.log("------------");

// Test 4
grid = [
  [1, 1, 0, 0, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 1, 1],
];
Result = numberOfIslands(grid);
console.log({ Inputs: { grid }, Result, Expected: 3 });
console.log("------------");
