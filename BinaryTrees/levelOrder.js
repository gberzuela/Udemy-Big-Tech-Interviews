const BinaryTree = require("../utils/BinaryTree");

/*
Given a binary tree, return the level order traversal of the nodes' values as an array

e.x. Given a Binary Tree:
            3
          /   \
         6     1
        / \     \
       9   2    4
        \
         5
        /
       8
Return [[3], [6, 1], [9, 2, 4], [5], [8]]

Level order: An array of arrays containing every value of that level

Constraints:
- What do we return if the tree is empty
    - []
*/

/**
 *
 * @param {BinaryTree} root
 * @returns
 */

/*
My solution
BFS
Base case: if root is null, return []
Initialize result = [] and queue = [[root, 0]]
- We're going to keep track of the level of each node as a subarray in the queue
While the queue is not empty
- Dequeue a node out
    - If our result has an array at that level, push the current nodes value
    - Else, create a new subarray at that index
- If the current node has a left/right, push a subarray with those nodes and the current nodes level + 1

Time:  O(n)
Space: O(2n) => O(n) b/c our result and queue would contain most of the nodes
*/
// const levelOrder = (root) => {
//   if (!root) return [];

//   const result = [];
//   const queue = [[root, 0]];

//   while (queue.length) {
//     const [node, level] = queue.shift();
//     if (result[level]) result[level].push(node.value);
//     else result[level] = [node.value];

//     if (node.left) queue.push([node.left, level + 1]);
//     if (node.right) queue.push([node.right, level + 1]);
//   }

//   return result;
// };

/*
Udemy Solution
BFS: Process all the nodes at a certain level first
Base case: if root is null, return []
Initialize result = [] and queue = [root]
While the queue is not empty
- Note the length of the queue
- Initialize a new array
- While we have no processed the number of nodes === length of queue 
    - Dequeue a node out and initialize a count
    - Push current node's children
- Push new array

Time:  O(n) where n = number of nodes in the BinaryTree
Space: O(2n) => O(n) b/c our result and queue would contain most of the nodes
*/
const levelOrder = (root) => {
  if (!root) return [];

  const result = [];
  const queue = [root];

  while (queue.length) {
    const levelValues = [];
    const length = queue.length;

    for (let i = 0; i < length; i++) {
      const current = queue.shift();
      levelValues.push(current.value);

      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }

    result.push(levelValues);
  }

  return result;
};

// Test 1
let root = new BinaryTree(3);
const node6 = new BinaryTree(6);
const node1 = new BinaryTree(1);
const node9 = new BinaryTree(9);
const node2 = new BinaryTree(2);
const node4 = new BinaryTree(4);
const node5 = new BinaryTree(5);
const node8 = new BinaryTree(8);

root.left = node6;
root.right = node1;

node1.right = node4;

node6.left = node9;
node6.right = node2;

node9.right = node5;

node5.left = node8;

let Result = levelOrder(root);
console.log({
  Inputs: { root },
  Result,
  Expected: [[3], [6, 1], [9, 2, 4], [5], [8]],
});
console.log("------------");

// Test 2
root = new BinaryTree(3);
Result = levelOrder(root);
console.log({ Inputs: { root }, Result, Expected: [[3]] });
console.log("------------");

// Test 3
root = null;
Result = levelOrder(root);
console.log({ Inputs: { root }, Result, Expected: [] });
console.log("------------");

// Test 4
root = new BinaryTree(1);
[2, 3, 4, 5].forEach((val) => root.insert(val));
Result = levelOrder(root);
console.log({ Inputs: { root }, Result, Expected: [[1], [2], [3], [4], [5]] });
console.log("------------");
