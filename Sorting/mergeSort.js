/**
 *
 * @param {Number[]} array
 */

/*
Divide and conquer
Break up the array until we have arrays of size one
  ie. array = [6, 5, 3, 1, 8, 7 , 2, 4]
              [6, 5, 3, 1], [8, 7, 2, 4]
              [6, 5], [3, 1], [8, 7], [2, 4]
              [6], [5], [3], [1], [8], [7], [2], [4]
For every pair, merge them in sorted order and continue until we have one array left
              [5, 6], [1, 3], [7, 8], [2, 4]
              [1, 3, 5, 6], [2, 4, 7, 8]
              [1, 2, 3, 4, 5, 6, 7, 8]


Time:  O(n*log(n))
Space: O(n) b/c we are breaking an array of size n into n arrays of size 1
*/
const split = (array) => {
  if (array.length <= 1) return array;
  const mid = Math.floor(array.length / 2);
  return [array.slice(0, mid), array.slice(mid)];
};

const merge = (array1, array2) => {
  const result = [];
  let p1 = 0;
  let p2 = 0;

  while (p1 < array1.length && p2 < array2.length) {
    if (array1[p1] < array2[p2]) {
      result.push(array1[p1]);
      p1++;
    } else {
      result.push(array2[p2]);
      p2++;
    }
  }

  return result.concat(array1.slice(p1)).concat(array2.slice(p1));
};

const mergeSort = (array) => {
  if (array.length === 1) return array;
  const [left, right] = split(array);
  return merge(mergeSort(left), mergeSort(right));
};

// Test 1
let array = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
console.log("Before --> ", array);
mergeSort(array);
console.log({
  Result: array,
  Expected: [0, 1, 2, 4, 5, 6, 44, 63, 87, 99, 283],
});
console.log("------------");

// Test 2
array = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
console.log("Before --> ", array);
mergeSort(array);
console.log({
  Result: array,
  Expected: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
});
console.log("------------");

// Test 3
array = [-1, 5, 3, 14, 6, 56, 93, -123, 69, -420];
console.log("Before --> ", array);
mergeSort(array);
console.log({
  Result: array,
  Expected: [-420, -123, -1, 3, 5, 6, 14, 56, 69, 93],
});
console.log("------------");
