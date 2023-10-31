import { Queue as IQueue } from './interfaces/Queue.interface';

/**
 * Represents a node in a queue.
 * @template T The type of the value stored in the node.
 */
interface Node<T> {
  value: T;
  next: Node<T> | null;
}

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

  public get length(): number {
    return this._length;
  }

  /**
   * Creates a new Queue instance.
   * @constructor
   * @template T The type of elements held in this queue.
   * @param {...T[]} items - The initial items to insert into the queue.
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
    if (!this.head) {
      return undefined;
    }

    this._length--;

    const removedHead = this.head;
    this.head = this.head.next;

    removedHead.next = null;

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
