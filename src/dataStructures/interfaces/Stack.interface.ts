import { Enumerable } from './Enumerable.interface';

/**
 * An interface representing a stack data structure.
 * @template T The type of elements held in the stack.
 */
export interface Stack<T> extends Enumerable<T> {
  /**
   * Adds an element to the top of the stack.
   * @param item Element to add.
   * @returns Updated stack.
   */
  push: (item: T) => Stack<T>;

  /**
   * Removes and returns the element at the top of the stack.
   * @returns The removed element or undefined if the stack is empty.
   */
  pop: () => T | undefined;

  /**
   * Peek at the top of the stack.
   * @returns The element at the top of the stack without removing it or undefined if the stack is empty.
   */
  peek: () => T | undefined;
}
