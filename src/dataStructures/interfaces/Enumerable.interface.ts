/**
 * An interface representing a collection of elements that can be enumerated.
 * @template T The type of elements in the collection.
 */
export interface Enumerable<T> {
  /**
   * The number of elements in the collection.
   */
  readonly length: number;

  /**
   * Removes all elements from the collection.
   */
  clear: () => void;

  /**
   * @returns The array representation of the collection.
   */
  toArray: () => T[];

  /**
   * @returns The string representation of the collection.
   */
  toString: () => string;
}
