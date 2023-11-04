import { Enumerable } from './Enumerable.interface';

/**
 * An interface representing a queue data structure.
 * @template T The type of elements held in the queue.
 */
export interface Queue<T> extends Enumerable<T> {
  /**
   * Adds an element to the end of the queue.
   * @param item Element to add.
   * @returns Updated queue.
   */
  enqueue: (item: T) => Queue<T>;

  /**
   * Removes and returns the element at the start of the queue.
   * @returns The removed element or undefined if the queue is empty.
   */
  dequeue: () => T | undefined;

  /**
   * Peek at the start of the queue.
   * @returns The element at the start of the queue without removing it or undefined if the queue is empty.
   */
  peek: () => T | undefined;
}
