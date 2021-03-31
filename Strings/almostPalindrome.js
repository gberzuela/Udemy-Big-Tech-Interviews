/*
*Subproblem: a problem we have to solve along the way to solving the main problem

Given a string, determine if it is almost a palindrome. A string is almost a palindrome if it becomes a palindrome by removing 1 letter. Consider only alphanumeric characters and ignore case sensitivity. 

Constraints:
- Do we consider a palindrome as almost a palindrome?
    - Yes
*/

/**
 *
 * @param {*} s
 * @returns a boolean determining if "s" is almost a palindrome
 */

/*
Brute Force

Time:  O()
Space: ()
*/
const almostPalindrome = (s) => {
  let deleted = false;

  function checkPalindrome(string) {
    let left = 0;
    let right = string.length - 1;

    while (left < right) {
      if (string[left] !== string[right]) {
        if (deleted) return false;
        deleted = true;
        return (
          checkPalindrome(s.slice(left, right)) ||
          checkPalindrome(s.slice(left + 1, right + 1))
        );
      }
      left++;
      right--;
    }

    return true;
  }

  return checkPalindrome(s);
};

/*
  Optimizing
  
  Time:  O()
  Space: O()
  */
// const almostPalindrome = (s) => {
//     return false
// }

// Example 1
let s = "raceacar";
let Result = almostPalindrome(s);
console.log({ Inputs: { s }, Result, Expected: true });
console.log("------------");

// Example 2
s = "abccdba";
Result = almostPalindrome(s);
console.log({ Inputs: { s }, Result, Expected: true });
console.log("------------");

// Example 3
s = "abcdefdba";
Result = almostPalindrome(s);
console.log({ Inputs: { s }, Result, Expected: false });
console.log("------------");

// Example 4
s = "";
Result = almostPalindrome(s);
console.log({ Inputs: { s }, Result, Expected: true });
console.log("------------");

// Example 5
s = "a";
Result = almostPalindrome(s);
console.log({ Inputs: { s }, Result, Expected: true });
console.log("------------");

// Example 5
s = "ab";
Result = almostPalindrome(s);
console.log({ Inputs: { s }, Result, Expected: true });
console.log("------------");
