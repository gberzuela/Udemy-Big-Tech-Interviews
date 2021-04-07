/**
 *
 * @param {Number[]} array
 */

/*
Compare an element with every other element.
Swap elements if the previous element is greater

Time:  O(n^2)
Space: O(1)
*/
const bubbleSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
};

// Test 1
let array = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
console.log("Before --> ", array);
bubbleSort(array);
console.log({
  Result: array,
  Expected: [0, 1, 2, 4, 5, 6, 44, 63, 87, 99, 283],
});
console.log("------------");

// Test 2
array = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
console.log("Before --> ", array);
bubbleSort(array);
console.log({
  Result: array,
  Expected: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
});
console.log("------------");

// Test 3
array = [-1, 5, 3, 14, 6, 56, 93, -123, 69, -420];
console.log("Before --> ", array);
bubbleSort(array);
console.log({
  Result: array,
  Expected: [-420, -123, -1, 3, 5, 6, 14, 56, 69, 93],
});
console.log("------------");
