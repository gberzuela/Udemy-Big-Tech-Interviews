/*
Given a 2D array containing -1's (walls), 0's (gates) and INF's (empty room). Fill each empty room with the number of steps to the nearest gate.

If it is impossible to reach a gate, leave ING as the value. INF is equal to 2147483647.

Constraints:
- 
*/

/**
 *
 * @param {Number[][]} grid
 * @returns the input grid mutated such that all INF values are replaced with a number representing the number of steps to the nearest gate if possible
 */

/*
My solution
- Find the coordinates of each gate
- If we have no gates, return the grid unchanged
- BFS: while we have a gate or some path to follow...
    - Take the current coordinates and check its neighbors (in up, right, down, left order)
    - If the coordinates are invalid (out of bounds or the neighbor is either a WALL or GATE) continue
    - If the neighbor === INF, push it onto our queue to continue our traversal
    - Otherwise, just calculate the distance that neighbor is from the nearest gate
        - min(current cell + 1, neighbors value)

Time:  O(row * col)
Space: O(row * col) worst case grid is full of gates (our queue would be the same size as input grid)
*/
const WALL = -1;
const GATE = 0;
const INF = 2147483647;
const directions = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

const wallsAndGates = (grid) => {
  const gates = findGates(grid);
  if (!gates.length) return grid;

  while (gates.length) {
    const [currRow, currCol] = gates.shift();

    for (let direction of directions) {
      const [newRow, newCol] = [currRow + direction[0], currCol + direction[1]];

      if (
        newRow < 0 ||
        newRow >= grid.length ||
        newCol < 0 ||
        newCol >= grid[newRow].length ||
        grid[newRow][newCol] <= 0
      )
        continue;

      if (grid[newRow][newCol] === INF) {
        gates.push([newRow, newCol]);
      }

      grid[newRow][newCol] = Math.min(
        grid[currRow][currCol] + 1,
        grid[newRow][newCol]
      );
    }
  }

  return grid;
};

const findGates = (grid) => {
  const result = [];

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      if (grid[row][col] === GATE) result.push([row, col]);
    }
  }

  return result;
};

/*
  Optimizing
  
  Time:  O()
  Space: O()
  */
// const wallsAndGates = (grid) => {
//     return false
// }

// Test 1
let grid = [
  [INF, WALL, GATE, INF],
  [INF, INF, INF, WALL],
  [INF, WALL, INF, WALL],
  [GATE, WALL, INF, INF],
];
let Result = wallsAndGates(grid);
console.log({
  Inputs: { grid },
  Result,
  Expected: [
    [3, WALL, GATE, 1],
    [2, 2, 1, WALL],
    [1, WALL, 2, WALL],
    [GATE, WALL, 3, 4],
  ],
});
console.log("------------");

// Test 2
grid = [
  [INF, WALL, GATE, INF],
  [WALL, INF, INF, WALL],
  [INF, WALL, INF, WALL],
  [GATE, WALL, INF, INF],
];
Result = wallsAndGates(grid);
console.log({
  Inputs: { grid },
  Result,
  Expected: [
    [INF, WALL, GATE, 1],
    [WALL, 2, 1, WALL],
    [1, WALL, 2, WALL],
    [GATE, WALL, 3, 4],
  ],
});
console.log("------------");

// Test 3
grid = [];
Result = wallsAndGates(grid);
console.log({ Inputs: { grid }, Result, Expected: [] });
console.log("------------");

// Test 4
grid = [[]];
Result = wallsAndGates(grid);
console.log({ Inputs: { grid }, Result, Expected: [[]] });
console.log("------------");
