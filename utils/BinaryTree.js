class BinaryTree {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }

  insert(value) {
    const direction = value < this.value ? "left" : "right";
    if (this[direction]) this[direction].insert(value);
    else this[direction] = new BinaryTree(value);
    return this;
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
      console.log(value);
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
    console.log(this.value);
    if (this.left) this.left.dfsPreOrder();
    if (this.right) this.right.dfsPreOrder();
  }

  dfsInOrder() {
    if (this.left) this.left.dfsInOrder();
    console.log(this.value);
    if (this.right) this.right.dfsInOrder();
  }

  dfsPostOrder() {
    if (this.left) this.left.dfsPostOrder();
    if (this.right) this.right.dfsPostOrder();
    console.log(this.value);
  }
}

let root = new BinaryTree(9);
[4, 20, 1, 6, 15, 170].forEach((val) => root.insert(val));
/*
     9
    / \
   4   20
  / \ /  \
 1  6 15  170
*/

// Traversal Test 1
console.log("BFS Result:");
root.bfs();
console.log("------------\nExpected:\n9\n4\n20\n1\n6\n15\n170");

console.log("------------");

// Traversal Test 2
console.log("DFS (Pre) Result:");
root.dfsPreOrder();
console.log("------------\nExpected:\n9\n4\n1\n6\n20\n15\n170");

console.log("------------");

// Traversal Test 3
console.log("DFS (In) Result:");
root.dfsInOrder();
console.log("------------\nExpected:\n1\n4\n6\n9\n15\n20\n170");

console.log("------------");

// Traversal Test 3
console.log("DFS (Post) Result:");
root.dfsPostOrder();
console.log("------------\nExpected:\n1\n6\n4\n15\n170\n20\n9");

module.exports = BinaryTree;
