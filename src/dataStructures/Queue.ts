import { Queue as IQueue } from './interfaces/Queue.interface';

/**
 * Represents a node in a queue.
 * @template T The type of the value stored in the node.
 */
interface Node<T> {
  value: T;
  next: Node<T> | null;
}

/**
 * A queue is a data structure that follows the First-In-First-Out (FIFO) principle.
 * This means that the first element inserted into the queue is the first one to be removed.
 * A queue supports adding (enqueue) elements to the end of the queue and removing (dequeue) from the front.
 * This implementation uses a singly linked list to store the elements.
 * @see https://en.wikipedia.org/wiki/Queue_(abstract_data_type)
 *
 * @template T The type of elements held in this queue.
 */
export default class Queue<T> implements IQueue<T> {
  /**
   * The first node in the queue, or null if the queue is empty.
   */
  private head: Node<T> | null = null;

  /**
   * The last node in the queue, or null if the queue is empty.
   */
  private tail: Node<T> | null = null;

  /**
   * The number of elements in the queue.
   */
  private _length: number;

  get length(): number {
    return this._length;
  }

  /**
   * Creates a new Queue instance.
   * @constructor
   * @template T The type of elements held in this queue.
   * @param items The initial items to insert into the queue.
   */
  constructor(...items: T[]) {
    this._length = 0;
    items.forEach((item) => this.enqueue(item));
  }

  enqueue(item: T): Queue<T> {
    const node: Node<T> = { value: item, next: null };

    this._length++;

    if (!this.tail) {
      this.head = this.tail = node;
      return this;
    }

    this.tail.next = node;
    this.tail = node;

    return this;
  }

  dequeue(): T | undefined {
    if (this.length === 0 || !this.head) {
      return undefined;
    }

    this._length--;

    const removedHead = this.head;
    this.head = removedHead.next;

    if (this._length === 0) {
      this.head = this.tail = null;
    }

    return removedHead.value;
  }

  peek(): T | undefined {
    return this.head?.value;
  }

  clear(): void {
    this.head = this.tail = null;
    this._length = 0;
  }

  toArray(): T[] {
    const array: T[] = [];

    let current = this.head;

    while (current) {
      array.push(current.value);
      current = current.next;
    }

    return array;
  }

  toString(): string {
    return `Queue: [${this.toArray().join(', ')}]`;
  }
}
