/**
 * Merges two sorted arrays into a single sorted array.
 * @param left The left sorted array.
 * @param right The right sorted array.
 * @returns The merged sorted array.
 */
function merge(left: number[], right: number[]): number[] {
  const sortedArray: number[] = [];

  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    const leftItem = left[leftIndex]!;
    const rightItem = right[rightIndex]!;

    if (leftItem < rightItem) {
      sortedArray.push(leftItem);
      leftIndex++;
    } else {
      sortedArray.push(rightItem);
      rightIndex++;
    }
  }

  const leftRemainder = left.slice(leftIndex);
  const rightRemainder = right.slice(rightIndex);

  return sortedArray.concat(leftRemainder, rightRemainder);
}

/**
 * Sorts an array of numbers using the merge sort algorithm.
 * @param array - The array of numbers to be sorted.
 * @returns The sorted array of numbers.
 */
export default function mergeSort(array: number[]): number[] {
  if (array.length <= 1) {
    return array;
  }

  const middle = Math.floor(array.length / 2);

  const left = mergeSort(array.slice(0, middle));
  const right = mergeSort(array.slice(middle));

  return merge(left, right);
}
