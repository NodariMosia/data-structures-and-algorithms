/**
 * Searches for a target element in an array using linear search algorithm.
 * @param array The array to search in.
 * @param target The target element to search for.
 * @returns The index of the target element if found, otherwise -1.
 * @timeComplexity `O(n)`.
 */
export default function linearSearch<T>(array: T[], target: T): number {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }

  return -1;
}
