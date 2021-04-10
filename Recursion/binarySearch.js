/*
Uses binary search to check if an element is present in a sorted array

Time:  O(log(n))
Space: O(log(n)) b/c of recursive calls
*/

/**
 *
 * @param {Number[]} array sorted (ascending) array of numbers
 * @param {Number} k
 * @param {Number} left
 * @param {Number} right
 * @returns a boolean determining if k is in array
 */
// const binarySearch = (array, k, left, right) => {
// 	if (left <= right) {
// 		const mid = Math.floor((left + right) / 2);
// 		const value = array[mid];
// 		if (value === k) return true;
// 		if (value < k) return binarySearch(array, k, mid + 1, right);
// 		if (value > k) return binarySearch(array, k, left, mid - 1);
// 	}

// 	return false;
// };

/*
Iterative binary search

Time:  O(log(n))
Space: O(1)
*/
/**
 *
 * @param {Number[]} array sorted (ascending) array of numbers
 * @param {Number} k
 * @returns a boolean determining if k is in array
 */
const binarySearch = (array, k) => {
	let left = 0;
	let right = array.length - 1;

	while (left <= right) {
		const mid = Math.floor((left + right) / 2);
		const value = array[mid];
		if (value === k) return true;
		if (value < k) left = mid + 1;
		if (value > k) right = mid - 1;
	}

	return false;
};

// Test 1
let array = [0, 1, 2, 4, 5, 6, 44, 63, 87, 99, 283];
let k = 44;
let Result = binarySearch(array, k, 0, array.length - 1);
console.log({
	Inputs: { array, k },
	Result,
	Expected: true,
});
console.log('------------');

// Test 2
array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
k = 11;
Result = binarySearch(array, k, 0, array.length - 1);
console.log({
	Inputs: { array, k },
	Result,
	Expected: false,
});
console.log('------------');

// Test 3
array = [-420, -123, -1, 3, 5, 6, 14, 56, 69, 93];
k = -420;
Result = binarySearch(array, k, 0, array.length - 1);
console.log({
	Inputs: { array, k },
	Result,
	Expected: true,
});
console.log('------------');
