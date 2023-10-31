import { List } from './interfaces/List.interface';

/**
 * Represents a node in a linked list.
 * @template T The type of the value stored in the node.
 */
interface Node<T> {
  value: T;
  next: Node<T> | null;
  prev: Node<T> | null;
}

/**
 * A doubly linked list implementation, which is a linear collection of data elements,
 * whose order is not given by their physical placement in memory.
 * @template T The type of elements held in this list.
 */
export default class LinkedList<T> implements List<T> {
  /**
   * The first node in the linked list, or null if the list is empty.
   */
  private head: Node<T> | null = null;

  /**
   * The last node in the linked list, or null if the list is empty.
   */
  private tail: Node<T> | null = null;

  /**
   * The number of elements in the list.
   */
  private _length: number;

  public get length(): number {
    return this._length;
  }

  /**
   * Creates a new LinkedList instance.
   * @constructor
   * @template T The type of elements held in this list.
   * @param {...T[]} items - The initial items to insert into the LinkedList.
   */
  constructor(...items: T[]) {
    this._length = 0;
    items.forEach((item) => this.insertLast(item));
  }

  /**
   * Walks the linked list from the head of the list.
   * @param steps The number of steps to walk from the head.
   * @returns The node that is `steps` steps away from the head, or null if `steps` is out of bounds.
   */
  private walkFromHead(steps: number): Node<T> | null {
    if (steps < 0 || steps >= this.length) {
      return null;
    }

    let curr = this.head;

    for (let i = 0; i < steps; i++) {
      curr = curr?.next ?? null;
    }

    return curr;
  }

  /**
   * Walks the linked list from the tail of the list.
   * @param steps The number of steps to walk from the tail.
   * @returns The node that is `steps` steps away from the tail, or null if `steps` is out of bounds.
   */
  private walkFromTail(steps: number): Node<T> | null {
    if (steps < 0 || steps >= this.length) {
      return null;
    }

    let curr = this.tail;

    for (let i = 0; i < steps; i++) {
      curr = curr?.prev ?? null;
    }

    return curr;
  }

  /**
   * Gets the node at the specified index.
   * @param index The index of the node to get.
   * @returns The node at the specified `index`, or null if `index` is out of bounds.
   */
  private getNodeAt(index: number): Node<T> | null {
    return index < this.length / 2
      ? this.walkFromHead(index)
      : this.walkFromTail(this.length - index - 1);
  }

  insertFirst(item: T): LinkedList<T> {
    return this.insertAt(item, 0) ?? this;
  }

  insertLast(item: T): LinkedList<T> {
    return this.insertAt(item, this.length) ?? this;
  }

  insertAt(item: T, index: number): LinkedList<T> | undefined {
    if (index < 0 || index > this.length) {
      return undefined;
    }

    const node: Node<T> = { value: item, next: null, prev: null };

    const prev = this.getNodeAt(index - 1);
    const next = index === 0 ? this.head : prev?.next ?? null;

    if (prev) {
      prev.next = node;
      node.prev = prev;
    }

    if (next) {
      next.prev = node;
      node.next = next;
    }

    if (index === 0) {
      this.head = node;
    }

    if (index === this.length) {
      this.tail = node;
    }

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
    if (index < 0 || index >= this.length || !this.head || !this.tail) {
      return undefined;
    }

    const node = this.getNodeAt(index);

    if (!node) {
      return undefined;
    }

    const prev = node.prev;
    const next = node.next;

    if (prev) {
      prev.next = next;
    }

    if (next) {
      next.prev = prev;
    }

    if (index === 0) {
      this.head = next;
    }

    if (index === this.length - 1) {
      this.tail = prev;
    }

    this._length--;

    return node.value;
  }

  remove(item: T): boolean {
    let curr = this.head;

    for (let i = 0; i < this.length; i++) {
      if (curr?.value !== item) {
        curr = curr?.next ?? null;
        continue;
      }

      const prev = curr.prev;
      const next = curr.next;

      if (prev) {
        prev.next = next;
      }

      if (next) {
        next.prev = prev;
      }

      if (i === 0) {
        this.head = next;
      }

      if (i === this.length - 1) {
        this.tail = prev;
      }

      this._length--;
    }

    return curr !== null;
  }

  getFirst(): T | undefined {
    return this.head?.value;
  }

  getLast(): T | undefined {
    return this.tail?.value;
  }

  getAt(index: number): T | undefined {
    return this.getNodeAt(index)?.value;
  }

  indexOf(item: T): number {
    let curr = this.head;

    for (let i = 0; i < this.length; i++) {
      if (curr?.value === item) {
        return i;
      }

      curr = curr?.next ?? null;
    }

    return -1;
  }

  contains(item: T): boolean {
    return this.indexOf(item) !== -1;
  }

  clear(): void {
    this.head = this.tail = null;
    this._length = 0;
  }

  toArray(): T[] {
    const arr: T[] = [];

    let curr = this.head;

    while (curr) {
      arr.push(curr.value);
      curr = curr.next;
    }

    return arr;
  }

  toString(): string {
    const buffer: string[] = [];

    let curr = this.head;

    while (curr) {
      buffer.push(`${curr.value}`);
      curr = curr.next;
    }

    return `LinkedList: [${buffer.join(' <-> ')}]`;
  }
}
