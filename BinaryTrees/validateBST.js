const BinaryTree = require("../utils/BinaryTree");

/*
Given a binary tree, determine if it is a valid binary search tree.

Constraints:
- Can there be duplicate values in the tree?
    - Yes, if you receive duplicate values the tree is not a valid binary search tree
*/

/**
 *
 * @param {BinaryTree} root
 * @returns {boolean} determining if a given binary tree is a valid binary search tree
 */

/*
Udemy solution

Time:  O(n) where n = number of nodes in BinaryTree
Space: O(n)
*/
const validateBST = (root) => {
  if (!root) return true;
  return dfs(root, -Infinity, Infinity);
};

/*
In-order traversal
Keep track of the min and max value that a node needs to fall under
As we traverse,
- If we go left, the next node must follow the condition: 
    - prev node < current node < prev max
- If we go right, the next node must follow the condition:
    - prev min < current node < prev node
If false if either the conditions aren't met or if the following subtrees are invalid
Return true otherwise
*/
const dfs = (node, min, max) => {
  if (node.value <= min || node.value >= max) return false;
  if (node.left) {
    if (!dfs(node.left, min, node.value)) return false;
  }
  if (node.right) {
    if (!dfs(node.right, node.value, max)) return false;
  }
  return true;
};

// Test 1
let root = new BinaryTree(12);
[7, 5, 9, 18, 16, 25].forEach((val) => root.bstInsert(val));
let Result = validateBST(root);
console.log({ Inputs: { root }, Result, Expected: true });
console.log("------------");

// Test 2
root = null;
Result = validateBST(root);
console.log({ Inputs: { root }, Result, Expected: true });
console.log("------------");

// Test 3
root = new BinaryTree(10);
Result = validateBST(root);
console.log({ Inputs: { root }, Result, Expected: true });
console.log("------------");

// Test 4
root = new BinaryTree(12);
root.insert([15, 17]);
Result = validateBST(root);
console.log({ Inputs: { root }, Result, Expected: false });
console.log("------------");

// Test 5
root = new BinaryTree(13);
root.insert([9, 10]);
Result = validateBST(root);
console.log({ Inputs: { root }, Result, Expected: false });
console.log("------------");

// Test 6
root = new BinaryTree(15);
root.insert([12, 17, 10, 16, 16, 18]);
Result = validateBST(root);
console.log({ Inputs: { root }, Result, Expected: false });
console.log("------------");

// Test 7
root = new BinaryTree(15);
root.insert([12, 18, 10, 14, 13, 20]);
Result = validateBST(root);
console.log({ Inputs: { root }, Result, Expected: false });
console.log("------------");
