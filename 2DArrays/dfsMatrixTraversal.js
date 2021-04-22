/*

Constraints:
- 
*/

/**
 *
 * @param {Number[][]]} matrix
 * @returns an array of values representing the order of DFS matrix traversal
 */

/*
Udemy solution
At every value in the matrix, we try to move in the order: up, right, down, left

Time:  O(row * col)
Space: O(row * col)
*/
const dfsMatrixTraversal = (matrix) => {
  // Adjacency matrix
  const seen = new Array(matrix.length)
    .fill(0)
    .map(() => new Array(matrix[0].length).fill(false));
  const result = [];

  traverse(matrix, 0, 0, seen, result);
  return result;
};

const traverse = (matrix, row, col, seen, result) => {
  if (
    row < 0 ||
    row >= matrix.length ||
    col < 0 ||
    col >= matrix[0].length ||
    seen[row][col]
  )
    return;

  result.push(matrix[row][col]);
  seen[row][col] = true;
  // Up, right, down, left
  const directions = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];

  for (let direction of directions) {
    const [i, j] = direction;
    const newRow = row + i;
    const newCol = col + j;
    traverse(matrix, newRow, newCol, seen, result);
  }
};

const constructMatrix = (row, col = row) => {
  const matrix = [];
  let count = 1;

  for (let i = 0; i < row; i++) {
    const newRow = [];
    for (let j = 0; j < col; j++) {
      newRow.push(count++);
    }
    matrix.push(newRow);
  }

  console.log(matrix);
  return matrix;
};

// Test 1
let matrix = constructMatrix(4, 5);
/*
  [1,  2,  3,  4,  5 ]
  [6,  7,  8,  9,  10]
  [11, 12, 13, 14, 15]
  [16, 17, 18, 19, 20]
*/
let Result = dfsMatrixTraversal(matrix);
console.log({
  Inputs: { matrix },
  Result,
  Expected: [
    1,
    2,
    3,
    4,
    5,
    10,
    15,
    20,
    19,
    14,
    9,
    8,
    13,
    18,
    17,
    12,
    7,
    6,
    11,
    16,
  ],
});
console.log("------------");

// Test 2
matrix = constructMatrix(4);
/*
  [ 1,  2,  3,  4  ]
  [ 5,  6,  7,  8  ]
  [ 9,  10, 11, 12 ]
  [ 13, 14, 15, 16 ]
*/
Result = dfsMatrixTraversal(matrix);
console.log({
  Inputs: { matrix },
  Result,
  Expected: [1, 2, 3, 4, 8, 12, 16, 15, 11, 7, 6, 10, 14, 13, 9, 5],
});
console.log("------------");

// Test 3
matrix = [];
Result = dfsMatrixTraversal(matrix);
console.log({ Inputs: { matrix }, Result, Expected: [] });
console.log("------------");

// Test 4
matrix = constructMatrix(2, 3);
/*
  [ 1, 2, 3 ]
  [ 4, 5, 6 ]
*/
Result = dfsMatrixTraversal(matrix);
console.log({ Inputs: { matrix }, Result, Expected: [1, 2, 3, 6, 5, 4] });
console.log("------------");
