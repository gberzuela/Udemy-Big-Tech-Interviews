const ListNode = require("../utils/ListNode");

/*
Given a linked list and determine if there is a cycle. If there is, return where the cycle begins. Otherwise, return false

Constraints:
- 
*/

/**
 *
 * @param {ListNode} head
 * @returns either a ListNode representing where the cycle begins in "head" or false if there is no cycle
 */

/*
Brute force/Naive: keeping track of all nodes

Initialize set
Iterate through the linked list
- If we find a node that's in the list, return true
- Else, add it to the set
Return false otherwise

Time:  O(n)
Space: O(n)
*/
const cycleDetection = (head) => {
  let current = head;
  const seen = new Set(); // An array of unique values

  while (current) {
    if (seen.has(current)) return current;
    seen.add(current);
    current = current.next;
  }

  return false;
};

const printLL = (head) => {
  let current = head;
  let result = "";

  while (current) {
    if (current.next) {
      result += `${current.value} -> `;
    } else {
      result += `${current.value} -> null`;
    }
    current = current.next;
  }

  return result;
};

// Example 1
let head = [5, 4, 3, 2, 1].reduce(
  (result, next) => new ListNode(next, result),
  null
);
console.log({ Inputs: { head: printLL(head) } });
let Result = cycleDetection(head);
console.log({
  Result,
  Expected: false,
});
console.log("------------");

// Example 2
head = new ListNode(1);
let LL2 = new ListNode(2);
let LL3 = new ListNode(3);
let LL4 = new ListNode(4);
let LL5 = new ListNode(5);
let LL6 = new ListNode(6);
let LL7 = new ListNode(7);
let LL8 = new ListNode(8);

head.update(LL2);
LL2.update(LL3);
LL3.update(LL4);
LL4.update(LL5);
LL5.update(LL6);
LL6.update(LL7);
LL7.update(LL8);
LL8.update(LL3);

/*
1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 - \
          ^- <- <- <- <- <- <- <- <- < /
*/

console.log({ Inputs: { head } });
Result = cycleDetection(head);
console.log({
  Result,
  Expected: LL3,
});
console.log("------------");

// Example 3
head = new ListNode(5);

console.log({ Inputs: { head } });
Result = cycleDetection(head);
console.log({ Result, Expected: false });
console.log("------------");

// Example 4
head = null;

console.log({ Inputs: { head } });
Result = cycleDetection(head);
console.log({ Result, Expected: false });
console.log("------------");
