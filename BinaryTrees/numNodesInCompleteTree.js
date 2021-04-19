const BinaryTree = require("../utils/BinaryTree");

/*
Notes:

Full tree: every node has either 2 or no children
Complete tree: every level is completely full with the exception of the last level and all nodes are pushed left
Full & Complete: every node has either 2 or no children and every level is completely filled
*/

/*
Given a complete binary tree, count the number of nodes.
*/

/**
 *
 * @param {BinaryTree} root
 * @returns an integer representing the number of nodes in a complete binary tree
 */

/*
Brute Force
BFS to touch every node

Time:  O(n) where n = number of nodes in Binary Tree
Space: O(n) 
*/
// const numNodesInCompleteTree = (root) => {
//   if (!root) return 0;

//   let result = 0;
//   const queue = [root];

//   while (queue.length) {
//     const current = queue.shift();
//     result++;
//     if (current.left) queue.push(current.left);
//     if (current.right) queue.push(current.right);
//   }

//   return result;
// };

/*
Optimizing
Note: The number of nodes in a full & complete tree is 2^(h - 1) - 1 where h = height of the tree
We know for sure that in a complete tree, we have a full and complete tree when we exclude the last level
Knowing this, we can optimize the solution by getting the height of the tree and counting the number of nodes in the last level
- Min number of nodes in last level = 1
- Max number of nodes in last level = 2^(h - 1)
Counting nodes in last level:
- Determine right most node with binary search


Time:  O(h^2 + h) where h = height of tree
       O(log(n) * log(n) + log(n)) => O(log(n) * log(n))
Space: O(1)
*/
const numNodesInCompleteTree = (root) => {
  if (!root) return 0;

  // Get height of tree
  const height = getTreeHeight(root);
  if (!height) return 1;

  // Calculate the number of nodes that exist
  // This number doubles as the last "index" of the last layer
  const upperCount = Math.pow(2, height) - 1;

  // Find the "index" of the last existing node in the last layer
  let left = 0;
  let right = upperCount;
  while (left < right) {
    const mid = Math.ceil((left + right) / 2);
    if (nodeExists(mid, height, root)) left = mid;
    else right = mid - 1;
  }

  return upperCount + left + 1;
};

// Traverse as far down left as possible to find height
// Note* we can do this because it's a complete tree
const getTreeHeight = (root) => {
  let result = 0;
  while (root.left) {
    root = root.left;
    result++;
  }
  return result;
};

/*
Binary search to find if a node at a specific "index" within the last level exists
At every level
- if the idxToFind if >= the mid value of the left and right bounds, move right
- else, move left
*/
const nodeExists = (idxToFind, height, node) => {
  let left = 0;
  let right = Math.pow(2, height) - 1;
  let count = 0;

  while (count < height) {
    const mid = Math.ceil((left + right) / 2);
    if (idxToFind >= mid) {
      node = node.right;
      left = mid;
    } else {
      node = node.left;
      right = mid - 1;
    }
    count++;
  }

  return node !== null;
};

// Test 1
let root = new BinaryTree(1);
root.insert([2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
let Result = numNodesInCompleteTree(root);
console.log({ Inputs: { root }, Result, Expected: 15 });
console.log("------------");

// Test 2
root = new BinaryTree(1);
root.insert([2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
Result = numNodesInCompleteTree(root);
console.log({ Inputs: { root }, Result, Expected: 12 });
console.log("------------");

// Test 3
root = new BinaryTree(1);
root.insert([2, 3, 4, 5, 6, 7, 8]);
Result = numNodesInCompleteTree(root);
console.log({ Inputs: { root }, Result, Expected: 8 });
console.log("------------");

// Test 4
root = null;
Result = numNodesInCompleteTree(root);
console.log({ Inputs: { root }, Result, Expected: 0 });
console.log("------------");
