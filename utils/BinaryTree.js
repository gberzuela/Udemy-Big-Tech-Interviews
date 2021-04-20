class BinaryTree {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }

  bstInsert(value) {
    const direction = value < this.value ? "left" : "right";
    if (this[direction]) this[direction].bstInsert(value);
    else this[direction] = new BinaryTree(value);
    return this;
  }

  /**
   * Udemy insert for creating a standard BinaryTree
   * @param {Number[]} values
   */
  /*
    Input: [1,2,3,null,4,null,5]
    Result:
              1
          2        3
     null   4  null  5
  */
  insert(values) {
    const queue = [this];
    let i = 0;
    while (queue.length > 0) {
      let current = queue.shift();
      for (let side of ["left", "right"]) {
        if (!current[side]) {
          if (values[i] !== null) {
            current[side] = new BinaryTree(values[i]);
          }
          i++;
          if (i >= values.length) return this;
        }
        if (current[side]) queue.push(current[side]);
      }
    }
  }

  // Returns a boolean determining if a value is within a BinarySearchTree
  lookup(value) {
    if (this.value === value) return true;
    if (this.left && value < this.value) return this.left.lookup(value);
    if (this.right && value > this.value) return this.right.lookup(value);
    return false;
  }

  /*
  Pros;
  - Shortest path
  - Closer nodes

  Cons:
  - More memory
  */
  bfs() {
    const queue = [root];

    while (queue.length) {
      const { value, left, right } = queue.shift();
      process.stdout.write(`${value} `);
      if (left) queue.push(left);
      if (right) queue.push(right);
    }
  }

  /*
  Pros:
  - Less memory
  - Does path exist questions

  Cons:
  - Can be slower
  */
  dfsPreOrder() {
    process.stdout.write(`${this.value} `);
    if (this.left) this.left.dfsPreOrder();
    if (this.right) this.right.dfsPreOrder();
  }

  dfsInOrder() {
    if (this.left) this.left.dfsInOrder();
    process.stdout.write(`${this.value} `);
    if (this.right) this.right.dfsInOrder();
  }

  dfsPostOrder() {
    if (this.left) this.left.dfsPostOrder();
    if (this.right) this.right.dfsPostOrder();
    process.stdout.write(`${this.value} `);
  }
}

let root = new BinaryTree(9);
[4, 20, 1, 6, 15, 170].forEach((val) => root.bstInsert(val));
/*
     9
    / \
   4   20
  / \ /  \
 1  6 15  170
*/

// // Traversal Test 1
// process.stdout.write("BFS Result: ");
// root.bfs();
// console.log("\nExpected: 9 4 20 1 6 15 170");

// console.log("------------");

// // Traversal Test 2
// process.stdout.write("DFS (Pre) Result: ");
// root.dfsPreOrder();
// console.log("\nExpected: 9 4 1 6 20 15 170");

// console.log("------------");

// // Traversal Test 3
// process.stdout.write("DFS (In) Result: ");
// root.dfsInOrder();
// console.log("\nExpected: 1 4 6 9 15 20 170");

// console.log("------------");

// // Traversal Test 3
// process.stdout.write("DFS (Post) Result: ");
// root.dfsPostOrder();
// console.log("\nExpected: 1 6 4 15 170 20 9");

// BST Construction Test 1
/*
      9
   /     \
  4       20
 / \     /   \
1   6   15   170
*/
// root = new BinaryTree(9);
// [4, 6, 20, 170, 15, 1].forEach((val) => root.bstInsert(val));
// console.log("lookup(1):", root.lookup(1));
// console.log("Expected: true");
// console.log("------------");
// console.log("lookup(12):", root.lookup(12));
// console.log("Expected: false");

module.exports = BinaryTree;
