/*
Given two strings, return if they equal when both are typed out. Any # that appears in the string counts as a backspace

Constraints:
- What happens when two #'s appear beside each other
    - Delete the two values before the first #
    - ex. 'ab##' => 'ab'
- What happens to # when there is no character to remove?
    - It deletes nothing, just like a backspace would.
    - ex. 'a##b' => 'b'
- Are two empty strings equal to each other?
    - Yes
- Does case sensitivity matter?
    - Yes
*/

/**
 *
 * @param {String} S
 * @param {String} T
 * @returns a boolean determining if both strings are equal when typed into empty text editors, a # represents a backspace character
 */

/*
Brute Force

Time:  O(n + m) where n is size of S and m is size of T
Space: O(n + m) 
*/
const typedOutStrings = (S, T) => {
  const string1 = process(S.split(""));
  const string2 = process(T.split(""));
  return string1 === string2;
};

const process = (arr) => {
  return arr
    .reduce((result, next) => {
      if (next === "#") result.pop();
      else result.push(next);
      return result;
    }, [])
    .join("");
};

/*
  Optimizing
  
  Time:  O()
  Space: O()
  */
// const typedOutStrings = (S, T) => {
//     return false
// }

// Example 1
let S = "ab#z";
let T = "az#z";
let Result = typedOutStrings(S, T);
console.log({ Inputs: { S, T }, Result, Expected: true });
console.log("------------");

// Example 2
S = "abc#d";
T = "acc#c";
Result = typedOutStrings(S, T);
console.log({ Inputs: { S, T }, Result, Expected: false });
console.log("------------");

// Example 3
S = "x#y#z#";
T = "a#";
Result = typedOutStrings(S, T);
console.log({ Inputs: { S, T }, Result, Expected: true });
console.log("------------");

// Example 4
S = "a###b";
T = "b";
Result = typedOutStrings(S, T);
console.log({ Inputs: { S, T }, Result, Expected: true });
console.log("------------");

// Example 5
S = "Ab#z";
T = "ab#z";
Result = typedOutStrings(S, T);
console.log({ Inputs: { S, T }, Result, Expected: false });
console.log("------------");
