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
Initialize result = []
Initialize queue = [[root, 0]]
- We're going to keep track of the level of each node as a subarray in the queue
While the queue is not empty
- Shift a node out
    - If our result has an array at that level, push the current nodes value
    - Else, create a new subarray at that index
- If the current node has a left/right, push a subarray with those nodes and the current nodes level + 1

Time:  O(n)
Space: O(2n) => O(n) b/c our result and queue would contain most of the nodes
*/
const levelOrder = (root) => {
  if (!root) return [];

  let result = [];
  const queue = [[root, 0]];

  while (queue.length) {
    const [node, level] = queue.shift();
    if (result[level]) result[level].push(node.value);
    else result[level] = [node.value];

    if (node.left) queue.push([node.left, level + 1]);
    if (node.right) queue.push([node.right, level + 1]);
  }

  return result;
};

/*
  Optimizing
  
  Time:  O()
  Space: O()
  */
// const levelOrder = (root) => {
//     return false
// }

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
