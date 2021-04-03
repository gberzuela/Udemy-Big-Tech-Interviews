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

Iterate through the LL
If we find a child
    Keep reference of currents next pointer
    Current node's next pointer will now point to the child
    Child's prev will point to current
    Iterate to the end of the child to get reference of the end node
    Last node of child will point to the current pointer's original next node
    Original next node's prev pointer will point to child's last node
    Current node's child will be set to null

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
      if (next) next.prev = childPointer;
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

/*
makeLists, strLists, and printLists all provided by Karen Fisher
repl: https://replit.com/@karencfisher/doublelist#main.py

Given an array [1,2,3,4,5,6,null,null,null,7,8,9,10,null,null,11,12]
- calling makeLists will transform it into a multileve doubly linked list
- calling printLists would print to the console:
    1 -> 2 -> 3 -> 4 -> 5 -> 6        
        |        
        7 -> 8 -> 9 -> 10            
            |            
            11 -> 12

*Note: seems to only work for structures with only one additional layer
e.x. CANNOT build 
    1 -> 2 -> 3 -> 4 -> 5 -> 6
         |              |
         7 -> 8 -> 9    10 -> 11
*/
const makeLists = (arr) => {
  let head = null;
  let prev = null;
  let i = 0;

  while (i < arr.length) {
    if (arr[i]) {
      const newNode = new DoublyListNode(arr[i], null, prev);
      if (!prev) {
        head = newNode;
        prev = newNode;
      } else {
        prev.next = newNode;
        prev = newNode;
      }
      i++;
    } else {
      let node = head;
      let end = false;
      while (!arr[i]) {
        if (!node.next) end = true;
        else node = node.next;
        i++;
      }
      if (end) node.child = makeLists(arr.slice(i));
      else node.prev.child = makeLists(arr.slice(i));
      break;
    }
  }

  return head;
};

const strLists = (head, lists) => {
  if (!head) return;

  const nodes = [];

  while (head) {
    nodes.push(`${head.value}`);
    if (head.child) {
      nodes.push("|");
      strLists(head.child, lists);
    }
    head = head.next;
  }

  lists.push(nodes);
};

const printLists = (head) => {
  const lists = [];
  strLists(head, lists);

  if (!lists.length) return;

  let prevIndent = 0;
  for (let i = lists.length - 1; i >= 0; i--) {
    const value = lists[i];
    let count = -1;
    let indent = 0;
    let s = [];
    let child = 0;

    for (let j = 0; j < value.length; j++) {
      if (value[j] !== "|") {
        s.push(value[j]);
        count++;
      } else {
        indent = count * 4;
        child = count;
      }
    }

    console.log(s.join(" -> "));
    if (lists.length > 1 && i < lists.length) {
      prevIndent += indent;
      let indentation = new Array(prevIndent).fill(" ").join("");
      if (value[0].length > 1) {
        indentation += new Array(child).fill(" ").join("");
      }
      console.log(indentation + "|");
      process.stdout.write(indentation);
    }
  }
  console.log("");
};

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

console.log("Inputs:");
console.log(printLL(head));
let Result = multilevelDoublyLL(head);
console.log("Result:");
console.log(printLL(Result));
console.log(
  "Expected:\n1 -> 2 -> 7 -> 8 -> 10 -> 11 -> 9 -> 3 -> 4 -> 5 -> 12 -> 13 -> 6"
);
console.log("------------");

// Example 2
let array = [
  1,
  2,
  3,
  4,
  5,
  6,
  null,
  null,
  null,
  7,
  8,
  9,
  10,
  null,
  null,
  11,
  12,
];

head = makeLists(array);
console.log("Inputs:");
printLists(head);
Result = multilevelDoublyLL(head);
console.log("Result:");
printLists(Result);
console.log(
  "Expected:\n1 -> 2 -> 3 -> 7 -> 8 -> 11 -> 12 -> 9 -> 10 -> 4 -> 5 -> 6"
);
console.log("------------");

// Example 3
array = [
  1,
  2,
  12,
  null,
  null,
  3,
  4,
  11,
  null,
  null,
  5,
  6,
  10,
  null,
  null,
  7,
  8,
  9,
];

head = makeLists(array);
console.log("Inputs:");
printLists(head);
Result = multilevelDoublyLL(head);
console.log("Result:");
printLists(Result);
console.log(
  "Expected:\n1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> 9 -> 10 -> 11 -> 12 "
);
console.log("------------");
