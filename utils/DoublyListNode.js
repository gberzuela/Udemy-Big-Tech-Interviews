module.exports = class DoublyListNode {
  constructor(value, next = null, prev = null, child = null) {
    this.value = value;
    this.next = next;
    this.prev = prev;
    this.child = child;
  }

  update(next = null, prev = null, child = null) {
    this.next = next;
    this.prev = prev;
    this.child = child;
  }
};
