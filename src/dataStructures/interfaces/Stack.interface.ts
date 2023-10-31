import { Enumerable } from './Enumerable.interface';

export interface Stack<T> extends Enumerable<T> {
  /**
   * @description Adds an element to the top of the stack.
   * @param item Element to add.
   * @returns Updated stack.
   */
  push: (item: T) => Stack<T>;

  /**
   * @description Removes and returns the element at the top of the stack.
   * @returns The removed element or undefined if the stack is empty.
   */
  pop: () => T | undefined;

  /**
   * @description Peek at the top of the stack.
   * @returns The element at the top of the stack without removing it or undefined if the stack is empty.
   */
  peek: () => T | undefined;
}
