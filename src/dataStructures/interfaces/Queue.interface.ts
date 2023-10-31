import { Enumerable } from './Enumerable.interface';

export interface Queue<T> extends Enumerable<T> {
  /**
   * @description Adds an element to the end of the queue.
   * @param item Element to add.
   * @returns Updated queue.
   */
  enqueue: (item: T) => Queue<T>;

  /**
   * @description Removes and returns the element at the start of the queue.
   * @returns The removed element or undefined if the queue is empty.
   */
  dequeue: () => T | undefined;

  /**
   * @description Peek at the start of the queue.
   * @returns The element at the start of the queue without removing it or undefined if the queue is empty.
   */
  peek: () => T | undefined;
}
