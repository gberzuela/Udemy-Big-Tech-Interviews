const ListNode = require("../utils/ListNode");

/*
Given a linked list and numbers m and n, return it back with only positions m to n in reverse.
e.x.
Inputs 
  m = 2
  n = 4
  head = 1 -> 2 -> 3 -> 4 -> 5 -> null
Output
  1 -> 4 -> 3 -> 2 -> 5 -> null

Constraints:
- Will m and n always be within the bouns of the linked list?
  - Yes, 1 <= m <= n =< length of LL
- Can we receive and m and n values for the whole linked list?
  - Yes, we can get m = 1 and n = length of LL
*/

/**
 *
 * @param {ListNode} head
 * @param {Number} m start position of sublist to reverse
 * @param {Number} n end position of sublist to reverse
 * @returns a Linked List with a section m to n in reverse
 */

/*
Steps
- get current node
- store next value
- update next value to "listSoFar"
- store current node as "listSoFar"
- update current node to stored next value

Time:  O(n)
Space: O(1)
*/
const reverseBetween = (head, m, n) => {
  if (!head) return head;

  let index = 1;
  let current = head;
  let start = head;

  // Find where sublist starts, it will point to the ListNode at m - 1
  while (index < m) {
    start = current;
    current = current.next;
    index++;
  }

  let newList = null;
  let newTail = current; // keep reference of the ListNode at position m

  /*
  Reverse sublist

  Built a new linked list in reverse
  */
  while (index >= m && index <= n) {
    const next = current.next;
    current.next = newList;
    newList = current;
    current = next;
    index++;
  }

  start.next = newList;
  newTail.next = current;

  if (m > 1) return head;
  return newList;
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
let m = 2;
let n = 4;
console.log({ Inputs: { head: printLL(head), m, n } });
let Result = reverseBetween(head, m, n);
console.log({
  Result: printLL(Result),
  Expected: "1 -> 4 -> 3 -> 2 -> 5 -> null",
});
console.log("------------");

// Example 2
head = [5, 4, 3, 2, 1].reduce(
  (result, next) => new ListNode(next, result),
  null
);
m = 1;
n = 5;
console.log({ Inputs: { head, m, n } });
Result = reverseBetween(head, m, n);
console.log({
  Result: printLL(Result),
  Expected: "5 -> 4 -> 3 -> 2 -> 1 -> null",
});
console.log("------------");

// Example 3
head = new ListNode(5);
m = 1;
n = 1;
console.log({ Inputs: { head, m, n } });
Result = reverseBetween(head, m, n);
console.log({ Result: printLL(Result), Expected: printLL(head) });
console.log("------------");

// Example 4
head = null;
m = 0;
n = 0;
console.log({ Inputs: { head, m, n } });
Result = reverseBetween(head, m, n);
console.log({ Result, Expected: null });
console.log("------------");
