/*
Select a pivot point
Move all values < pivot to the left 
Move all values >= pivot to the right
Do the same with all values from the left and right of pivot
- Find a new pivot for the subarray
- Move values to left and right

Time:  O(n*log(n)) || O(n^2) if pivot point is bad
Space: O(log(n))
*/

/**
 * Sorts an input array in place
 * @param {Number[]} array
 * @param {Number} left left index of array to sort
 * @param {Number} right right index of array to sort
 */
const quickSort = (array, left, right) => {
  if (left < right) {
    const partition = getPartition(array, left, right);
    quickSort(array, left, partition - 1);
    quickSort(array, partition + 1, right);
  }
};

const getPartition = (array, left, right) => {
  let i = left;
  for (let j = left; j <= right; j++) {
    if (array[j] <= array[right]) {
      const swap = array[j];
      array[j] = array[i];
      array[i] = swap;
      i++;
    }
  }
  return i - 1;
};

// Test 1
let array = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
console.log("Before --> ", array);
quickSort(array, 0, array.length - 1);
console.log({
  Result: array,
  Expected: [0, 1, 2, 4, 5, 6, 44, 63, 87, 99, 283],
});
console.log("------------");

// Test 2
array = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
console.log("Before --> ", array);
quickSort(array, 0, array.length - 1);
console.log({
  Result: array,
  Expected: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
});
console.log("------------");

// Test 3
array = [-1, 5, 3, 14, 6, 56, 93, -123, 69, -420];
console.log("Before --> ", array);
quickSort(array, 0, array.length - 1);
console.log({
  Result: array,
  Expected: [-420, -123, -1, 3, 5, 6, 14, 56, 69, 93],
});
console.log("------------");

module.exports = quickSort;
