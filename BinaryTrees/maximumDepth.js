const BinaryTree = require("../utils/BinaryTree");

/*
Given a binary tree, find its maximum depth.

Maximum depth is the number of nodes along the longest path from the root node to the furthest leaf node.

e.x. given the binary tree:
      x
     / \
    x   x
   / \
  x   x
   \
    x
     \
      x
Should return 5

Constraints:
- What do we return if the tree is empty?
    - 0
*/

/**
 *
 * @param {BinaryTree} root
 * @returns a number representing the longest path/height of the input Binary Tree
 */

/*
My recursive solution:
If input, root, is null, return 0
Initialize our result = 1, height of left subtree = 0, height of right subtree = 0
If there is a tree on the left/right, execute the function on that subtree
Return the max between result + left height and result + right height

Time:  O(n) where n = the number of nodes in the Binary Tree
Space: O(h) where h = the maximum height of the Binary Tree
       O(log(n))  h = log(n)
*/
// const maximumDepth = (root) => {
//   if (!root) return 0;

//   const result = 1;
//   let leftHeight = 0;
//   let rightHeight = 0;

//   if (root.left) leftHeight = maximumDepth(root.left);
//   if (root.right) rightHeight = maximumDepth(root.right);

//   return Math.max(result + leftHeight, result + rightHeight);
// };

/*
Udemy solution:
Keep track of currentDepth in the function definition (0 if none is passed)
If input, root, is null, return 0
Increment currentDepth
Return the max between the depth of the left subtree and the depth of the right subtree

Time:  O(n) where n = number of nodes in Binary Tree
Space: O(h) where h = maximum height of the Binary Tree 
       O(log(n))  h = log(n)
*/
const maximumDepth = (root, currentDepth = 0) => {
  if (!root) return currentDepth;

  currentDepth++;

  return Math.max(
    maximumDepth(root.left, currentDepth),
    maximumDepth(root.right, currentDepth)
  );
};

// Prints a Binary Tree through BFS
// Indicates the nodes value as well as what side it's on
const printBinaryTree = (root) => {
  let queue = [[root, "root"]];

  while (queue.length) {
    const [current, side] = queue.shift();
    console.log(current.value, side);
    if (current.left) queue.push([current.left, "left"]);
    if (current.right) queue.push([current.right, "right"]);
  }
};

// Test 1
let root = new BinaryTree(5);
[4, 2, 3, 4, 6].forEach((val) => root.insert(val));
/*
    5
   / \
  4   6
 /
2
 \
  3
   \
    4
*/
let Result = maximumDepth(root);
printBinaryTree(root);
console.log({ Inputs: { root }, Result, Expected: 5 });
console.log("------------");

// Test 2
root = null;
Result = maximumDepth(root);
console.log({ Inputs: { root }, Result, Expected: 0 });
console.log("------------");

// Test 3
root = new BinaryTree(1);
[2, 3, 4, 5, 6].forEach((val) => root.insert(val));
/*
1
 \
  2
   \
    3
     \
      4
       \
        5
         \
          6
*/
Result = maximumDepth(root);
console.log({ Inputs: { root }, Result, Expected: 6 });
console.log("------------");

// Test 4
root = new BinaryTree(1);
Result = maximumDepth(root);
console.log({ Inputs: { root }, Result, Expected: 1 });
console.log("------------");
