/**
 * Sorts an array of numbers using the insertion sort algorithm.
 * Mutates the original array in place and returns it.
 * @param array The array of numbers to be sorted.
 * @returns The sorted array of numbers.
 * @timeComplexity `O(n^2)`.
 */
export default function insertionSort(array: number[]): number[] {
  for (let currentSlot = 1; currentSlot < array.length; currentSlot++) {
    const current = array[currentSlot]!;
    let testSlot = currentSlot - 1;

    while (testSlot >= 0 && array[testSlot]! > current) {
      array[testSlot + 1] = array[testSlot]!;
      testSlot--;
    }

    array[testSlot + 1] = current;
  }

  return array;
}
