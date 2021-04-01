const ListNode = require("../utils/ListNode");

/*
Given a linked list, return it in reverse

Constraints:
- What do we return if we get null or a single node?
    - Return null or the node back
*/

/**
 *
 * @param {ListNode} head
 * @returns the "head" Linked List input in reverse
 */

/*
In place

Time:  O(n)
Space: O(1)
*/
const reverseLL = (head) => {
  let current = head;
  let prev = null;

  while (current) {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
};

/*
  
  Time:  O()
  Space: O()
  */
// const reverseLL = (head) => {
//     return false
// }

// Example 1
let head = new ListNode(1);
const LL2 = new ListNode(2);
const LL3 = new ListNode(3);
const LL4 = new ListNode(4);
const LL5 = new ListNode(5);

head.next = LL2;
LL2.next = LL3;
LL3.next = LL4;
LL4.next = LL5;

console.log({ Inputs: head });
let Result = reverseLL(head);
console.log({ Result, Expected: LL5 });
console.log("------------");

// Example 2
head = new ListNode(3);
console.log({ Inputs: head });
Result = reverseLL(head);
console.log({ Result, Expected: head });
console.log("------------");

// Example 3
head = null;
console.log({ Inputs: head });
Result = reverseLL(head);
console.log({ Result, Expected: null });
console.log("------------");

// // Example 4
// Result = reverseLL(head);
// console.log({ Inputs: { head }, Result, Expected: 0 });
// console.log("------------");

// // Example 5
// Result = reverseLL(head);
// console.log({ Inputs: { head }, Result, Expected: 0 });
// console.log("------------");
