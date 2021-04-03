module.exports = class ListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }

  update(next) {
    this.next = next;
  }
};
