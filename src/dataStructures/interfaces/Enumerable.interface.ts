export interface Enumerable<T> {
  /**
   * @description The number of elements in the collection.
   */
  readonly length: number;

  /**
   * @description Removes all elements from the collection.
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
