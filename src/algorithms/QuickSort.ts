/**
 * Partitions an array around a pivot element using Lomuto's partition scheme.
 * @param array The array to partition.
 * @param start The starting index of the partition.
 * @param end The ending index of the partition.
 * @returns The index of the pivot element after partitioning.
 */
function partition(array: number[], start: number, end: number): number {
  const pivot = array[end]!;

  let index = start - 1;

  for (let i = start; i < end; i++) {
    if (array[i]! <= pivot) {
      index++;
      const temp = array[i]!;
      array[i] = array[index]!;
      array[index] = temp;
    }
  }

  index++;
  array[end] = array[index]!;
  array[index] = pivot;

  return index;
}

/**
 * Sorts an array of numbers in ascending order using the quicksort algorithm.
 * @param array The array of numbers to be sorted.
 * @param start The starting index of the subarray to be sorted.
 * @param end The ending index of the subarray to be sorted.
 */
function recursiveQuickSort(array: number[], start: number, end: number): void {
  if (start >= end) {
    return;
  }

  const partitioningIndex = partition(array, start, end);

  recursiveQuickSort(array, start, partitioningIndex - 1);
  recursiveQuickSort(array, partitioningIndex + 1, end);
}

/**
 * Sorts an array of numbers in ascending order using the quick sort algorithm.
 * Mutates the original array in place and returns it.
 * @param array The array of numbers to be sorted.
 * @returns The sorted array of numbers.
 * @timeComplexity best & average case: `O(n log(n))`, worst case: `O(n^2)`.
 */
export default function quickSort(array: number[]): number[] {
  recursiveQuickSort(array, 0, array.length - 1);
  return array;
}
