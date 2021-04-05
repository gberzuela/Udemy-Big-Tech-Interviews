/*
Given a string only containing round brackets ('(' and ')') and lowercase characters, remove the least amount of brackets so the string is valid.

A string is considered valid if it is empty or if there are brackets, they all close.

Constraints:
- What do we return from out algorithm?
    - Return a valid string with the fewest brackets removed
- Will there be spaces in the string?
    - No, only lowercase chars or round bracketes
- Is a string containing only lowercase characters valid?
    - Yes
*/

/**
 *
 * @param {String} s
 * @returns a string with valid parentheses
 */

/*
Process "s" to be an array
Declare stack
- This will store indices of invalid opening parens
For every char in the array
- If it's a '(', push it into the stack
- Else if it's a ')' && there's something in the stack, pop the stack
- Else if it's just ')' then change the char at the current index to ''
While the stack is not empty
- Pop from the stack
- Change the char at the index to ''
Return the array joined by ''

Time:  O(n)
Space: O(n)
*/
const minBracketsToRemove = (s) => {
  const result = s.split("");
  const stack = [];

  for (let i = 0; i < result.length; i++) {
    const current = result[i];
    if (current === "(") stack.push(i);
    else if (current === ")" && stack.length) stack.pop();
    else if (current === ")") result[i] = "";
  }

  while (stack.length) {
    const index = stack.pop();
    result[index] = "";
  }

  return result.join("");
};

// Test 1
let s = "a)bc(d)";
let Result = minBracketsToRemove(s);
console.log({ Inputs: { s }, Result, Expected: "abc(d)" });
console.log("------------");

// Test 2
s = "(ab(c)d";
Result = minBracketsToRemove(s);
console.log({ Inputs: { s }, Result, Expected: "ab(c)d || (abc)d" });
console.log("------------");

// Test 3
s = "))((";
Result = minBracketsToRemove(s);
console.log({ Inputs: { s }, Result, Expected: "" });
console.log("------------");
