const DoublyListNode = require("../utils/DoublyListNode");

/*
Given a doubly linked list, list nodes also have a child property that can point to a separate doubly linked list. These child lists can also have one or more child doubly linked lists of their own, and so on.

Return the list as a single level flattened doubly linked list.

Constraints:
- Can a doubly linked list have multiple child list nodes?
    - Yes
- What do we do with child properteries after flattening
    - Set child property to null
*/

/**
 *
 * @param {DoublyListNode} head multilevel doubly linked list
 * @returns input "head" flat doubly linked is
 */

/*
My solution

Time:  O(n)
Space: O(1)
*/
const multilevelDoublyLL = (head) => {
  let current = head;

  while (current) {
    if (current.child) {
      const { next } = current;
      let childPointer = current.child;

      current.next = childPointer;
      childPointer.prev = current;

      while (childPointer.next) {
        childPointer = childPointer.next;
      }

      childPointer.next = next;
      next.prev = childPointer;
      current.child = null;
    }

    current = current.next;
  }

  return head;
};

/*
Optimizing

Time:  O()
Space: O()
*/
// const multilevelDoublyLL = (head) => {
//     return false
// }

const printLL = (head) => {
  let current = head;
  let result = "";

  while (current) {
    if (current.next) {
      result += `${current.value}`;
      result += current.child
        ? ` [ child: ${printLL(current.child)}] `
        : " -> ";
    } else {
      result += `${current.value}`;
      result += current.child
        ? ` [ child: ${printLL(current.child)}] `
        : " -> null ";
    }
    current = current.next;
  }

  return result;
};

// Example 1
let head = new DoublyListNode(1);
let LL2 = new DoublyListNode(2);
let LL3 = new DoublyListNode(3);
let LL4 = new DoublyListNode(4);
let LL5 = new DoublyListNode(5);
let LL6 = new DoublyListNode(6);
let LL7 = new DoublyListNode(7);
let LL8 = new DoublyListNode(8);
let LL9 = new DoublyListNode(9);
let LL10 = new DoublyListNode(10);
let LL11 = new DoublyListNode(11);
let LL12 = new DoublyListNode(12);
let LL13 = new DoublyListNode(13);

head.update(LL2);
LL2.update(LL3, head, LL7);
LL3.update(LL4, LL2);
LL4.update(LL5, LL3);
LL5.update(LL6, LL4, LL12);
LL6.update(null, LL5);
LL7.update(LL8);
LL8.update(LL9, LL7, LL10);
LL9.update(null, LL8);
LL10.update(LL11);
LL11.update(null, LL10);
LL12.update(LL13);
LL13.update(null, LL12);

console.log({ Inputs: printLL(head) });
let Result = multilevelDoublyLL(head);
console.log({
  Result: printLL(Result),
  Expected:
    "1 -> 2 -> 7 -> 8 -> 10 -> 11 -> 9 -> 3 -> 4 -> 5 -> 12 -> 13 -> 6 -> null",
});
console.log("------------");

// // Example 2
// head = "";
// console.log({ Inputs: head });
// Result = multilevelDoublyLL(head);
// console.log({ Result, Expected: LL5 });
// console.log("------------");

// // Example 3
// head = "";
// console.log({ Inputs: head });
// Result = multilevelDoublyLL(head);
// console.log({ Result, Expected: LL5 });
// console.log("------------");

// // Example 4
// head = "";
// console.log({ Inputs: head });
// Result = multilevelDoublyLL(head);
// console.log({ Result, Expected: LL5 });
// console.log("------------");

// // Example 5
// head = "";
// console.log({ Inputs: head });
// Result = multilevelDoublyLL(head);
// console.log({ Result, Expected: LL5 });
// console.log("------------");
