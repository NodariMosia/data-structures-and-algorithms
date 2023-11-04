import { Enumerable } from './Enumerable.interface';

/**
 * A generic interface representing a list data structure.
 * @template T The type of elements in the list.
 */
export interface List<T> extends Enumerable<T> {
  /**
   * Inserts new element at the start of the list.
   * @param item Element to insert.
   * @returns Updated list.
   */
  insertFirst: (item: T) => List<T>;

  /**
   * Inserts new element at the end of the list.
   * @param item Element to insert.
   * @returns Updated list.
   */
  insertLast: (item: T) => List<T>;

  /**
   * Inserts new element at the specified index.
   * @param item Element to insert.
   * @param index Index to insert at.
   * @returns Updated list or undefined if the index is out of bounds.
   */
  insertAt: (item: T, index: number) => List<T> | undefined;

  /**
   * Removes the element at the start of the list.
   * @returns The removed element or undefined if the list is empty.
   */
  removeFirst: () => T | undefined;

  /**
   * Removes the element at the end of the list.
   * @returns The removed element or undefined if the list is empty.
   */
  removeLast: () => T | undefined;

  /**
   * Removes the element at the specified index.
   * @param index Index to remove at.
   * @returns The removed element or undefined if the index is out of bounds.
   */
  removeAt: (index: number) => T | undefined;

  /**
   * Removes the first occurrence of the specified element.
   * @param item Element to remove.
   * @returns `true` if the element was removed, false otherwise.
   */
  remove: (item: T) => boolean;

  /**
   * @returns The first element in the list or undefined if the list is empty.
   */
  getFirst: () => T | undefined;

  /**
   * @returns The last element in the list or undefined if the list is empty.
   */
  getLast: () => T | undefined;

  /**
   * Returns the element at the specified index.
   * @param index Index to get.
   * @returns The element at the specified index or undefined if the index is out of bounds.
   */
  getAt: (index: number) => T | undefined;

  /**
   * Returns the index of the first occurrence of the specified element.
   * @param item Element to search for.
   * @returns Index of the first occurrence of the specified element or -1 if not found.
   */
  indexOf: (item: T) => number;

  /**
   * Checks if the list contains the specified element.
   * @param item Element to check.
   * @returns `true` if the list contains the specified element, false otherwise.
   */
  contains: (item: T) => boolean;
}
