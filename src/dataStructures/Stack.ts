import { Stack as IStack } from './interfaces/Stack.interface';

/**
 * Represents a node in a stack.
 * @template T The type of the value stored in the node.
 */
interface Node<T> {
  value: T;
  prev: Node<T> | null;
}

/**
 * A stack is a data structure that follows the Last-In-First-Out (LIFO) principle.
 * This means that the last element inserted into the stack is the first one to be removed.
 * A stack supports adding (push) and removing (pop) elements from the top of the stack.
 * This implementation uses a singly linked list to store the elements.
 * @see https://en.wikipedia.org/wiki/Stack_(abstract_data_type)
 *
 * @template T The type of elements held in this stack.
 */
export default class Stack<T> implements IStack<T> {
  /**
   * The "top" node in the stack, or null if the stack is empty.
   */
  private head: Node<T> | null = null;

  /**
   * The number of elements in the stack.
   */
  private _length: number;

  public get length(): number {
    return this._length;
  }

  /**
   * Creates a new Stack instance.
   * @constructor
   * @template T The type of elements held in this stack.
   * @param items The initial items to insert into the stack.
   */
  constructor(...items: T[]) {
    this._length = 0;
    items.forEach((item) => this.push(item));
  }

  push(item: T): Stack<T> {
    const node: Node<T> = { value: item, prev: null };

    this._length++;

    if (!this.head) {
      this.head = node;
      return this;
    }

    node.prev = this.head;
    this.head = node;

    return this;
  }

  pop(): T | undefined {
    if (this.length === 0 || !this.head) {
      return undefined;
    }

    this._length--;

    const removedHead = this.head;
    this.head = removedHead.prev;

    return removedHead.value;
  }

  peek(): T | undefined {
    return this.head?.value;
  }

  clear(): void {
    this.head = null;
    this._length = 0;
  }

  toArray(): T[] {
    const array: T[] = [];

    let current = this.head;

    while (current) {
      array.push(current.value);
      current = current.prev;
    }

    return array;
  }

  toString(): string {
    return `Stack: [${this.toArray().join(', ')}]`;
  }
}
