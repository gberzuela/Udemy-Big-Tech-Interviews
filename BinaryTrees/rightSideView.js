const BinaryTree = require("../utils/BinaryTree");

/*
Given a binary tree, imagine you're standing to the right of the tree. Return an array of the values of the nodes you can see ordered from top to bottom.

e.x. Given the Binary Tree:
         1
        / \
       2  3
     / \   \
    4  5   6
     \
     7
    /
   8
Return [1, 3, 6, 7, 8] b/c if we were on the right, 3 would cover 2, and 6 would cover both 4 and 5
*/

/**
 *
 * @param {BinaryTree} root
 * @returns an array of values we can see from the right side
 */

/*
My solution
Pre-process the binary tree by levels
Basically solve for level order and filter each level for the last/right most node

Time:  O(2n) => O(n) where n = number of nodes in BinaryTree
Space: O(n)
*/
// const rightSideView = (root) => {
//   if (!root) return [];

//   const result = [];
//   const queue = [[root, 0]];

//   // Process level order
//   while (queue.length) {
//     const [node, level] = queue.shift();
//     if (result[level]) result[level].push(node);
//     else result[level] = [node];

//     if (node.left) queue.push([node.left, level + 1]);
//     if (node.right) queue.push([node.right, level + 1]);
//   }

//   // Reduce our level order to only have the last node of every level
//   return result.reduce((accu, next) => {
//     accu.push(next[next.length - 1].value);
//     return accu;
//   }, []);
// };

/*
Udemy BFS solution
Optimized level order approach

Time:  O(n) where n = number of nodes in BinaryTree
Space: O(n)
*/

const rightSideView = (root) => {
  if (!root) return [];

  const result = [];
  const queue = [root];

  while (queue.length) {
    let current;
    const length = queue.length;
    for (let i = 0; i < length; i++) {
      current = queue.shift();
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
    result.push(current.value);
  }

  return result;
};

// Test 1 - Example from above
let root = new BinaryTree(1);
root.insert([
  2,
  3,
  4,
  5,
  null,
  6,
  null,
  7,
  null,
  null,
  null,
  null,
  8,
  null,
  null,
  null,
]);

let Result = rightSideView(root);
console.log({ Input: root, Result, Expected: [1, 3, 6, 7, 8] });

// Test 2
root = null;
Result = rightSideView(root);
console.log({ Input: root, Result, Expected: [] });

// Test 3
root = new BinaryTree(1);
Result = rightSideView(root);
console.log({ Input: root, Result, Expected: [1] });
