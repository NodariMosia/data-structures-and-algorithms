import { List } from './interfaces/List.interface';

/**
 * A dynamic array implementation. A dynamic array is a data structure that can grow and shrink as needed.
 * This implementation uses a static array to store the elements of the list.
 * When the length of the list exceeds a certain threshold, the internal array grows.
 * When the length of the list is less than a certain threshold, the internal array shrinks.
 * Growing and shrinking doesn't modify the inner array, but rather creates a new array and copies the elements to it.
 * @see https://en.wikipedia.org/wiki/Dynamic_array
 *
 * @template T The type of elements held in this list.
 */
export default class ArrayList<T> implements List<T> {
  /**
   * The minimum capacity of the internal array.
   */
  private static readonly MINIMUM_CAPACITY = 10;

  /**
   * The threshold at which the internal array grows.
   */
  private static readonly GROWTH_THRESHOLD = 0.75;

  /**
   * The factor by which the internal array grows when its length is greater than `GROWTH_THRESHOLD * capacity`.
   */
  private static readonly GROWTH_FACTOR = 2;

  /**
   * The threshold at which the internal array shrinks.
   */
  private static readonly SHRINK_THRESHOLD = 0.5;

  /**
   * The factor by which the internal array shrinks when its length is less than `SHRINK_THRESHOLD * capacity`.
   */
  private static readonly SHRINK_FACTOR = 0.25;

  /**
   * The internal array that holds the elements of the ArrayList.
   */
  private array: (T | undefined)[];

  /**
   * The maximum number of elements the list can hold before it needs to grow.
   */
  private capacity: number;

  /**
   * The number of elements in the ArrayList.
   */
  private _length: number;

  get length(): number {
    return this._length;
  }

  /**
   * Creates a new ArrayList instance.
   * @constructor
   * @template T
   * @param items The initial items to add to the ArrayList.
   */
  constructor(...items: T[]) {
    const minCapacity = Math.ceil(items.length / ArrayList.GROWTH_THRESHOLD);
    this.capacity = Math.max(minCapacity, ArrayList.MINIMUM_CAPACITY);
    this.array = this.getStaticArray(this.capacity, items);
    this._length = items.length;
  }

  /**
   * Returns a static array of length `length` with optional initial values `items`.
   * If an initial value is not provided for an index, the value at that index will be `undefined`.
   * The returned array is sealed to prevent modification of its length or properties.
   * @param length The length of the array to create.
   * @param items Optional initial values for the array.
   * @returns A static array of length `length` with optional initial values `items`.
   */
  private getStaticArray(length: number, items: (T | undefined)[] = []): (T | undefined)[] {
    const arr = new Array(length);

    for (let i = 0; i < length; i++) {
      arr[i] = items[i] ?? undefined;
    }

    Object.seal(arr);

    return arr;
  }

  /**
   * Grows the capacity of the array if the length exceeds a certain threshold.
   * The new capacity is calculated by multiplying the current capacity with the growth factor.
   * The elements of the old array are copied to the new array.
   */
  private growIfNeeded(): void {
    const threshold = Math.ceil(this.capacity * ArrayList.GROWTH_THRESHOLD);

    if (this.length < threshold) {
      return;
    }

    const newCapacity = this.capacity * ArrayList.GROWTH_FACTOR;
    const newArray = this.getStaticArray(newCapacity, this.array);

    this.capacity = newCapacity;
    this.array = newArray;
  }

  /**
   * Shrinks the capacity of the array if the length is less than the shrink threshold.
   * The new capacity is calculated by multiplying the current capacity with the shrink factor.
   * If the new capacity is less than the minimum capacity, the capacity remains unchanged.
   * The elements of the old array are copied to the new array.
   */
  private shrinkIfNeeded(): void {
    const threshold = Math.ceil(this.capacity * ArrayList.SHRINK_THRESHOLD);

    if (this.length > threshold) {
      return;
    }

    const newCapacity = Math.ceil(this.capacity * ArrayList.SHRINK_FACTOR);

    if (newCapacity < ArrayList.MINIMUM_CAPACITY) {
      return;
    }

    const newArray = this.getStaticArray(newCapacity, this.array);

    this.capacity = newCapacity;
    this.array = newArray;
  }

  insertFirst(item: T): ArrayList<T> {
    return this.insertAt(item, 0) ?? this;
  }

  insertLast(item: T): ArrayList<T> {
    return this.insertAt(item, this.length) ?? this;
  }

  insertAt(item: T, index: number): ArrayList<T> | undefined {
    if (index < 0 || index > this.length) {
      return undefined;
    }

    this.growIfNeeded();

    for (let i = this.length; i > index; i--) {
      this.array[i] = this.array[i - 1];
    }

    this.array[index] = item;
    this._length++;

    return this;
  }

  removeFirst(): T | undefined {
    return this.removeAt(0);
  }

  removeLast(): T | undefined {
    return this.removeAt(this.length - 1);
  }

  removeAt(index: number): T | undefined {
    if (index < 0 || index >= this.length) {
      return undefined;
    }

    const item = this.array[index];

    for (let i = index; i < this.length - 1; i++) {
      this.array[i] = this.array[i + 1];
    }

    this.array[this.length - 1] = undefined;
    this._length--;

    this.shrinkIfNeeded();

    return item;
  }

  remove(item: T): boolean {
    const index = this.indexOf(item);
    const removed = this.removeAt(index);

    return removed !== undefined;
  }

  getFirst(): T | undefined {
    return this.array[0];
  }

  getLast(): T | undefined {
    return this.array[this.length - 1];
  }

  getAt(index: number): T | undefined {
    return this.array[index];
  }

  indexOf(item: T): number {
    for (let i = 0; i < this.length; i++) {
      if (this.array[i] === item) {
        return i;
      }
    }

    return -1;
  }

  contains(item: T): boolean {
    return this.indexOf(item) !== -1;
  }

  clear(): void {
    this.capacity = ArrayList.MINIMUM_CAPACITY;
    this.array = this.getStaticArray(this.capacity);
    this._length = 0;
  }

  toArray(): T[] {
    return this.array.slice(0, this.length) as T[];
  }

  toString(): string {
    return `ArrayList: [${this.toArray().join(', ')}]`;
  }
}
