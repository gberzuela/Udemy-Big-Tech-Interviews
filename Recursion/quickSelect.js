/*
Select a pivot point
Move all values < pivot to the left
Move all values >= pivot to the right
If the pivot ends up at the desired index, return that value
If the pivot index is < desired index, quickSelect on the left side
Else quickSelect on the right side

Time:  O(n*log(n)) || O(n^2) if pivot point is bad
Space: O(log(n))
*/

/**
 * Finds an element at a certain index
 * Typically for problems that require an order
 * - Find kth largest/smallest number
 * @param {Number[]} array
 * @param {Number} left left index of array to sort
 * @param {Number} right right index of array to sort
 */
const quickSelect = (array, left, right, indexToFind) => {
	if (left < right) {
		const partition = getPartition(array, left, right);

		if (partition === indexToFind) return array[partition];
		if (partition > indexToFind)
			return quickSelect(array, left, partition - 1, indexToFind);
		if (partition < indexToFind)
			return quickSelect(array, partition + 1, right, indexToFind);
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

module.exports = quickSelect;
