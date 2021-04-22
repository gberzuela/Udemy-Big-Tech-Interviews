/**
 *
 * @param {Number[][]]} matrix
 * @returns an array of values representing the order of BFS matrix traversal
 */

/*
My solution
At every node in the matrix, we queue its neighbors to be processed next (up, right, down, left)

Time:  O(row * col)
Space: O(row * col)
*/
const bfsMatrixTraversal = (matrix) => {
  if (!matrix.length) return [];
  // Up, right, down, left
  const directions = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];
  // Adjacency matrix
  const seen = new Array(matrix.length)
    .fill(0)
    .map(() => new Array(matrix[0].length).fill(false));

  const result = [];
  const queue = [[0, 0]];

  while (queue.length) {
    const [row, col] = queue.shift();
    if (!seen[row][col]) {
      result.push(matrix[row][col]);
      seen[row][col] = true;

      for (let direction of directions) {
        const [newRow, newCol] = [row + direction[0], col + direction[1]];
        if (
          newRow >= 0 &&
          newRow < matrix.length &&
          newCol >= 0 &&
          newCol < matrix[0].length
        ) {
          queue.push([newRow, newCol]);
        }
      }
    }
  }

  return result;
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
let Result = bfsMatrixTraversal(matrix);
console.log({
  Inputs: { matrix },
  Result,
  Expected: [
    1,
    2,
    6,
    3,
    7,
    11,
    4,
    8,
    12,
    16,
    5,
    9,
    13,
    17,
    10,
    14,
    18,
    15,
    19,
    20,
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
Result = bfsMatrixTraversal(matrix);
console.log({
  Inputs: { matrix },
  Result,
  Expected: [1, 2, 5, 3, 6, 9, 4, 7, 10, 13, 8, 11, 14, 12, 15, 16],
});
console.log("------------");

// Test 3
matrix = [];
Result = bfsMatrixTraversal(matrix);
console.log({ Inputs: { matrix }, Result, Expected: [] });
console.log("------------");

// Test 4
matrix = constructMatrix(2, 3);
/*
    [ 1, 2, 3 ]
    [ 4, 5, 6 ]
  */
Result = bfsMatrixTraversal(matrix);
console.log({ Inputs: { matrix }, Result, Expected: [1, 2, 4, 3, 5, 6] });
console.log("------------");
