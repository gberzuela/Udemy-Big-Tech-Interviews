/*
*Subproblem: a problem we have to solve along the way to solving the main problem

Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring case sensitivity.
*/

/**
 *
 * @param {*} s
 * @returns
 */

/*
Palindrome Compare Against Reverse

Time:  O(n)
Space: (n)
*/
// const validPalindrome = (s) => {
//   /*
//     Regex to process string
//     [] = group of character to look for
//     ^ capture everything not in the group
//     What this does specifically? Replace any symbol (not alphanumeric) with an empty string
//   */
//   s = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
//   const reverse = s.split("").reverse().join("");

//   if (s.length !== reverse.length) return false;

//   for (let i = 0; i < s.length; i++) {
//     if (s[i] !== reverse[i]) return false;
//   }

//   return true;
// };

/*
  Two Pointers From Outside
  
  Time:  O()
  Space: O()
  */
const validPalindrome = (s) => {
  /*
    Regex to process string
    [] = group of character to look for
    ^ capture everything not in the group
    What this does specifically? Replace any symbol (not alphanumeric) with an empty string 
  */
  s = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();

  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) return false;
    left++;
    right--;
  }

  return true;
};

/*
  Two Pointers From Center
  
  Time:  O()
  Space: O()
  */
// const validPalindrome = (s) => {
//     return false
// }

// Example 1
let s = "aabaa";
let Result = validPalindrome(s);
console.log({ Inputs: { s }, Result, Expected: true });
console.log("------------");

// Example 2
s = "aabbaa";
Result = validPalindrome(s);
console.log({ Inputs: { s }, Result, Expected: true });
console.log("------------");

// Example 3
s = "abc";
Result = validPalindrome(s);
console.log({ Inputs: { s }, Result, Expected: false });
console.log("------------");

// Example 4
s = "a";
Result = validPalindrome(s);
console.log({ Inputs: { s }, Result, Expected: true });
console.log("------------");

// Example 5
s = "";
Result = validPalindrome(s);
console.log({ Inputs: { s }, Result, Expected: true });
console.log("------------");

// Example 6
s = "A man, a plan, a canal: Panama";
Result = validPalindrome(s);
console.log({ Inputs: { s }, Result, Expected: true });
console.log("------------");
