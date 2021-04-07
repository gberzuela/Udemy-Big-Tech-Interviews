/**
 *
 * @param {Number[]} array
 */

/*
Useful for almost sorted lists
For every element, find where it belongs and insert it
In the example below, we basically bubble down the number in its correct position
- The left side of the array will slowly get sorted and we can stop when we find a position such that for elements at index i, array[i - 1] < array[i] < array[i + 1]

Time:  O(n^2) => can be O(n) for sorted lists
Space: O(1)
*/
// const insertionSort = (array) => {
//   for (let i = 1; i < array.length; i++) {
//     let j = i;
//     while (j >= 0) {
//       if (array[j] < array[j - 1]) {
//         let swap = array[j];
//         array[j] = array[j - 1];
//         array[j - 1] = swap;
//         j--;
//       } else break;
//     }
//   }
// };

// Udemy solution
const insertionSort = (array) => {
  const length = array.length;

  for (let i = 0; i < length; i++) {
    if (array[i] < array[0]) {
      // Move number to the first position
      array.unshift(array.splice(i, 1)[0]);
    } else {
      // Only sort the number small than the number to the left of it. This is the part of insertion sort that makes it fast if the array is almost sorted.
      if (array[i] < array[i - 1]) {
        // Find the index to insert
        for (let j = 1; j < i; j++) {
          if (array[i] >= array[j - 1] && array[i] < array[j]) {
            // Insert
            array.splice(j, 0, array.splice(i, 1)[0]);
          }
        }
      }
    }
  }
};

// Test 1
let array = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
console.log("Before --> ", array);
insertionSort(array);
console.log({
  Result: array,
  Expected: [0, 1, 2, 4, 5, 6, 44, 63, 87, 99, 283],
});
console.log("------------");

// Test 2
array = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
console.log("Before --> ", array);
insertionSort(array);
console.log({
  Result: array,
  Expected: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
});
console.log("------------");

// Test 3
array = [-1, 5, 3, 14, 6, 56, 93, -123, 69, -420];
console.log("Before --> ", array);
insertionSort(array);
console.log({
  Result: array,
  Expected: [-420, -123, -1, 3, 5, 6, 14, 56, 69, 93],
});
console.log("------------");
