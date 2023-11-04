import MinHeap from '@dataStructures/MinHeap';

describe('MinHeap', () => {
  let heap: MinHeap<number>;

  beforeEach(() => {
    heap = new MinHeap();
    heap.insert(3).insert(2).insert(6).insert(4).insert(7).insert(1).insert(5);
  });

  test('constructor should create an empty heap', () => {
    const heap = new MinHeap();
    expect(heap.length).toBe(0);
    expect(heap.data).toEqual([]);
  });

  test('insert should add an element to the heap in the correct order', () => {
    expect(heap.length).toBe(7);
    expect(heap.data).toEqual([1, 3, 2, 4, 7, 6, 5]);
  });

  test('remove should remove and return the smallest element from the heap', () => {
    expect(heap.remove()).toBe(1);
    expect(heap.length).toBe(6);
    expect(heap.data).toEqual([2, 3, 5, 4, 7, 6]);

    expect(heap.remove()).toBe(2);
    expect(heap.remove()).toBe(3);
    expect(heap.remove()).toBe(4);
    expect(heap.remove()).toBe(5);
    expect(heap.remove()).toBe(6);
    expect(heap.length).toBe(1);
    expect(heap.data).toEqual([7]);

    expect(heap.remove()).toBe(7);
    expect(heap.remove()).toBeUndefined();
    expect(heap.length).toBe(0);
    expect(heap.data).toEqual([]);
  });

  test('peek should return the smallest element from the heap', () => {
    expect(heap.peek()).toBe(1);
    expect(heap.length).toBe(7);

    heap.remove();
    expect(heap.peek()).toBe(2);

    heap.remove();
    heap.remove();
    heap.remove();
    heap.remove();
    expect(heap.peek()).toBe(6);

    heap.remove();
    expect(heap.peek()).toBe(7);

    heap.remove();
    expect(heap.peek()).toBeUndefined();
  });
});
