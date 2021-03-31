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
