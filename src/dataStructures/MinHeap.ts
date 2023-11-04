import { MinHeap as IMinHeap } from './interfaces/MinHeap.interface';

/**
 * A min heap is a binary tree where the parent nodes are smaller than or equal to their child nodes.
 * This implementation uses an array to store the elements. The first element in the array is the smallest.
 * @see https://en.wikipedia.org/wiki/Min-max_heap
 *
 * @template T The type of elements held in this min heap.
 */
export default class MinHeap<T extends string | number> implements IMinHeap<T> {
  /**
   * An array that holds the elements of the MinHeap.
   */
  private _data: T[];

  get data(): T[] {
    return this._data;
  }

  get length(): number {
    return this._data.length;
  }

  /**
   * Creates a new MinHeap instance.
   * @constructor
   */
  constructor() {
    this._data = [];
  }

  /**
   * @param index The index of the node whose parent index is to be returned.
   * @returns The index of the parent node of the node at the given index.
   */
  private getParentIndex(index: number): number {
    return Math.floor((index - 1) / 2);
  }

  /**
   * @param index The index of the node whose left child index is to be returned.
   * @returns The index of the left child of the node at the given index.
   */
  private getLeftIndex(index: number): number {
    return 2 * index + 1;
  }

  /**
   * @param index The index of the node whose right child index is to be returned.
   * @returns The index of the right child of the node at the given index.
   */
  private getRightIndex(index: number): number {
    return 2 * index + 2;
  }

  /**
   * Swaps the values at the given indices in the heap's underlying data array.
   * If either index is out of bounds, this method does nothing.
   * @param index1 The index of the first value to swap.
   * @param index2 The index of the second value to swap.
   */
  private swap(index1: number, index2: number): void {
    if (index1 < 0 || index1 >= this.length || index2 < 0 || index2 >= this.length) {
      return;
    }

    const temp = this.data[index1]!;
    this.data[index1] = this.data[index2]!;
    this.data[index2] = temp;
  }

  /**
   * Moves the element at the given index up the heap until the heap property is restored.
   * @param index The index of the element to move up the heap.
   */
  private heapifyUp(index: number): void {
    if (index === 0) {
      return;
    }

    const parentIndex = this.getParentIndex(index);

    if (parentIndex < 0) {
      return;
    }

    const value = this.data[index]!;
    const parentValue = this.data[parentIndex]!;

    if (parentValue > value) {
      this.swap(index, parentIndex);
      this.heapifyUp(parentIndex);
    }
  }

  /**
   * Moves the element at the given index down the heap until the heap property is restored.
   * @param index - The index of the element to move down the heap.
   */
  private heapifyDown(index: number): void {
    if (index >= this.length) {
      return;
    }

    const leftIndex = this.getLeftIndex(index);
    const rightIndex = this.getRightIndex(index);

    if (leftIndex >= this.length || rightIndex >= this.length) {
      return;
    }

    const value = this.data[index]!;
    const leftValue = this.data[leftIndex]!;
    const rightValue = this.data[rightIndex]!;

    if (leftValue > rightValue && value > rightValue) {
      this.swap(index, rightIndex);
      this.heapifyDown(rightIndex);
    } else if (rightValue > leftValue && value > leftValue) {
      this.swap(index, leftIndex);
      this.heapifyDown(leftIndex);
    }
  }

  insert(value: T): MinHeap<T> {
    this.data.push(value);
    this.heapifyUp(this.length - 1);

    return this;
  }

  remove(): T | undefined {
    if (!this.length) {
      return;
    }

    const lastValue = this.data.pop();

    if (!this.length) {
      return lastValue;
    }

    const removedValue = this.data[0];
    this.data[0] = lastValue!;
    this.heapifyDown(0);

    return removedValue;
  }

  peek(): T | undefined {
    return this.data[0];
  }
}
