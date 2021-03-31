/*
*Subproblem: a problem we have to solve along the way to solving the main problem

Given a string, determine if it is almost a palindrome. A string is almost a palindrome if it becomes a palindrome by removing 1 letter. Consider only alphanumeric characters and ignore case sensitivity.

Subproblem: determine if the string or some substring is a palindrome

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
My solution:

Closure

Declare a variable (deleted) to determine if we have deleted a character already
Inner function will: 
    Iterate through the string with two pointers from outside
        If we come across characters that aren't the same
            If we have delted a character return false
            Else
                deleted = true
                Recursion: 
                    Check if the substring without the right pointer is a palindrome
                    CHeck if the substring without the left pointer is a palindrome
        Else
            Increment left
            Decrement right
    Return true because we didn't have to delete a character && we didn't find any mismatched characters
Return inner function call with input "s"

Time:  O(n)
Space: O(1)
*/
const almostPalindrome = (s) => {
  let deleted = false;

  function checkPalindrome(string, start, end) {
    while (start < end) {
      if (string[start] !== string[end]) {
        if (deleted) return false;
        deleted = true;
        return (
          checkPalindrome(string, start, end - 1) ||
          checkPalindrome(string, start + 1, end)
        );
      }
      start++;
      end--;
    }

    return true;
  }

  return checkPalindrome(s, 0, s.length - 1);
};

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
