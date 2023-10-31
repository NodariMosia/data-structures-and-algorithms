/**
 * Sorts an array of numbers in ascending order using the bubble sort algorithm.
 * Mutates the original array in place and returns it.
 * @param array - The array of numbers to be sorted.
 * @returns The sorted array of numbers.
 * @timeComplexity `O(n^2)`.
 */
export default function bubbleSort(array: number[]): number[] {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j]! > array[j + 1]!) {
        const temp = array[j]!;
        array[j] = array[j + 1]!;
        array[j + 1] = temp;
      }
    }
  }

  return array;
}
