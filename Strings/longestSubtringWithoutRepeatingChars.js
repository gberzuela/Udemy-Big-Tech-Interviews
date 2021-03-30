/*
Given a string, find the length of the longest substring without repeating characters

Constraints:
- Is the substring contiguous?
  - Yes, look for a substring not a subsquence
    - substring vs. subsequence
      - contiguous: chars are sequential and do not have breaks
      - ex. SUBSTRING of 'abcbbd' could be 'abc'
      - ex. SUBSEQUENCE of 'abcbbd' could be 'abc__d'
- Does case sensitivity matter?
  - No, assume all chars are lowercase
*/

/**
 *
 * @param {String} s
 * @returns length of longest substring of input "s" without repeating characters
 */

/*
Brute Force

Find all combinations of substrings without repeating chars
Nested for loop
- for every char as index i, create a hash
  - from that char as index j, iterate until end of input or if we find a repeating char
    - if the char is not already in the hash
      - add it to the hash, and determine if j - i + 1 > result
    - else, break nested loop
Return result

Time:  O(n^2) where n = s.length
Space: O(1)

*/
// const longestSubstringWithoutRepeatingChars = (s) => {
// 	if (s.length < 2) return s.length;

// 	let result = 0;

// 	for (let i = 0; i < s.length; i++) {
// 		const hash = {};
// 		for (let j = i; j < s.length; j++) {
// 			if (hash[s[j]]) break;
// 			hash[s[j]] = true;
// 			result = Math.max(result, j - i + 1);
// 		}
// 	}

// 	return result;
// };

/*
Optimizing

-- Save time with space --
Sliding window:
Hash every char we see
If we come across a char that's already in the hash, keep moving the start pointer until we have a hash of all unique chars

Time:  O(n) where n = s.length
Space: O(n)
*/
const longestSubstringWithoutRepeatingChars = (s) => {
	if (s.length < 2) return s.length;
	let result = 0;
	let windowStart = 0;
	let hash = {};

	for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
		const currentChar = s[windowEnd];

		while (hash[currentChar]) {
			const startChar = s[windowStart];
			hash[startChar]--;
			if (!hash[startChar]) delete hash[startChar];
			windowStart++;
		}

		result = Math.max(result, windowEnd - windowStart + 1);
		hash[currentChar] = 1;
	}
	return result;
};

// Example 1
let s = 'abccabb';
let Result = longestSubstringWithoutRepeatingChars(s);
console.log({ Inputs: { s }, Result, Expected: 3 });
console.log('------------');

// Example 2
s = 'cccccc';
Result = longestSubstringWithoutRepeatingChars(s);
console.log({ Inputs: { s }, Result, Expected: 1 });
console.log('------------');

// Example 3
s = '';
Result = longestSubstringWithoutRepeatingChars(s);
console.log({ Inputs: { s }, Result, Expected: 0 });
console.log('------------');

// Example 4
s = 'abcbda';
Result = longestSubstringWithoutRepeatingChars(s);
console.log({ Inputs: { s }, Result, Expected: 4 });
console.log('------------');

// // Example 5
// s = 'Ab#z';
// Result = longestSubstringWithoutRepeatingChars(s);
// console.log({ Inputs: { s }, Result, Expected: false });
// console.log('------------');

// // Example 5
// s = 'abc#d';
// Result = longestSubstringWithoutRepeatingChars(s);
// console.log({ Inputs: { s }, Result, Expected: true });
// console.log('------------');
