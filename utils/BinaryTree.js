module.exports = class BinaryTree {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }

  insert(value) {
    const direction = value <= this.value ? "left" : "right";
    if (this[direction]) this[direction].insert(value);
    else this[direction] = new BinaryTree(value);
    return this;
  }
};
