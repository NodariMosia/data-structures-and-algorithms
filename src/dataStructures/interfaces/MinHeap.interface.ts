/**
 * Interface for a min heap data structure.
 * @template T The type of elements held in the heap.
 */
export interface MinHeap<T extends string | number> {
  /**
   * The underlying data array of the heap. It is not recommended to modify this directly.
   * Instead, use the provided methods to insert and remove elements from the heap.
   */
  readonly data: T[];

  /**
   * The number of elements in the heap.
   */
  readonly length: number;

  /**
   * Inserts a new element into the heap in the correct position.
   * @param value The value to insert into the heap.
   * @returns The heap instance.
   */
  insert(value: T): MinHeap<T>;

  /**
   * Removes and returns the smallest element from the heap.
   * @returns The smallest element in the heap or undefined if the heap is empty.
   */
  remove(): T | undefined;

  /**
   * @returns The minimum element in the heap without removing it, or undefined if the heap is empty.
   */
  peek(): T | undefined;
}
