/**
 * Performs a binary search on a sorted array to find the index of a target value.
 * @param array The sorted array to search.
 * @param target The value to search for.
 * @param startIndex The index of the current first element in the original array.
 * @returns The index of the target value in the array, or -1 if it is not found.
 */
function recursiveBinarySearch(array: number[], target: number, startIndex: number): number {
  if (array.length === 0) {
    return -1;
  }

  if (array.length === 1) {
    return array[0] === target ? startIndex : -1;
  }

  const pivotIndex = Math.floor(array.length / 2);
  const pivotValue = array[pivotIndex]!;

  if (target < pivotValue) {
    return recursiveBinarySearch(array.slice(0, pivotIndex), target, startIndex);
  }

  if (target > pivotValue) {
    const startOffset = pivotIndex + 1;
    return recursiveBinarySearch(array.slice(startOffset), target, startIndex + startOffset);
  }

  return startIndex + pivotIndex;
}

/**
 * Performs a binary search on a sorted array to find the index of the target element.
 * @see https://en.wikipedia.org/wiki/Binary_search_algorithm
 *
 * @param sortedArray The sorted array to search.
 * @param target The target element to find.
 * @returns The index of the target element in the sorted array, or -1 if it is not found.
 * @timeComplexity `O(log(n))`.
 */
export default function binarySearch(sortedArray: number[], target: number): number {
  return recursiveBinarySearch(sortedArray, target, 0);
}
