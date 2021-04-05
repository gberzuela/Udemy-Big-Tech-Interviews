/*
Given a string containing only parentheses, determine if it is is. The string is valid if all parentheses close.

Constraints:
- Does an empty string count as valid?
  - Yes
*/

/**
 *
 * @param {String} s string of parentheses
 * @returns a boolean representing whether the string consists of valid opening and closing parentheses
 */

/*
Stack
Declare stack, an two objects that recognize opening and closing parentheses
For every char in "s"
- If it's an opening paren, push it to the stack
- If it's a closing paren
  - Pop from the stack
  - If the last item in the stack is not the proper opening paren, return false
Return true if stack is empty, false if there are still opening parens in stack

Time:  O(n)
Space: O(n)
*/
const validParentheses = (s) => {
  const stack = [];
  const opening = {
    "{": true,
    "[": true,
    "(": true,
  };
  const closing = {
    "}": "{",
    "]": "[",
    ")": "(",
  };

  for (let paren of s) {
    if (opening[paren]) stack.push(paren);
    if (closing[paren]) {
      const last = stack.pop();
      if (last !== closing[paren]) return false;
    }
  }

  return stack.length ? false : true;
};

// Example 1
let s = "";
let Result = validParentheses(s);
console.log({ Inputs: { s }, Result, Expected: true });
console.log("------------");

// Example 2
s = "{([])}";
Result = validParentheses(s);
console.log({ Inputs: { s }, Result, Expected: true });
console.log("------------");

// Example 3
s = "{([]";
Result = validParentheses(s);
console.log({ Inputs: { s }, Result, Expected: false });
console.log("------------");

// Example 4
s = "{[(])}";
Result = validParentheses(s);
console.log({ Inputs: { s }, Result, Expected: false });
console.log("------------");
