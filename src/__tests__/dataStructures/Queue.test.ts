import Queue from '@dataStructures/Queue';

describe('Queue', () => {
  let queue: Queue<number>;

  beforeEach(() => {
    queue = new Queue();
  });

  test('constructor should create an empty queue', () => {
    expect(queue.length).toBe(0);
    expect(queue.peek()).toBeUndefined();
    expect(queue.toArray()).toEqual([]);
  });

  test('constructor should create a queue with the specified items', () => {
    queue = new Queue(10, 20, 30);

    expect(queue.length).toBe(3);
    expect(queue.toArray()).toEqual([10, 20, 30]);
  });

  test('enqueue should add an item to the queue', () => {
    queue.enqueue(10).enqueue(20).enqueue(30);

    expect(queue.length).toBe(3);
    expect(queue.toArray()).toEqual([10, 20, 30]);
  });

  test('dequeue should remove and return the first item in the queue', () => {
    queue.enqueue(10).enqueue(20).enqueue(30);

    expect(queue.dequeue()).toBe(10);
    expect(queue.length).toBe(2);
    expect(queue.toArray()).toEqual([20, 30]);

    expect(queue.dequeue()).toBe(20);
    expect(queue.dequeue()).toBe(30);
    expect(queue.dequeue()).toBeUndefined();
    expect(queue.length).toBe(0);
    expect(queue.peek()).toBeUndefined();
    expect(queue.toArray()).toEqual([]);
  });

  test('peek should return the first item in the queue', () => {
    queue.enqueue(10).enqueue(20).enqueue(30);

    expect(queue.peek()).toBe(10);
    expect(queue.length).toBe(3);
    expect(queue.toArray()).toEqual([10, 20, 30]);

    queue.dequeue();
    queue.dequeue();
    expect(queue.peek()).toBe(30);
    queue.dequeue();
    expect(queue.length).toBe(0);
    expect(queue.peek()).toBeUndefined();
    expect(queue.toArray()).toEqual([]);
  });

  test('clear should remove all items from the queue', () => {
    queue.enqueue(10).enqueue(20).enqueue(30).clear();

    expect(queue.length).toBe(0);
    expect(queue.peek()).toBeUndefined();
    expect(queue.toArray()).toEqual([]);
  });

  test('toArray should return an array of all items in the queue', () => {
    queue.enqueue(10).enqueue(20).enqueue(30);

    expect(queue.toArray()).toEqual([10, 20, 30]);
  });

  test('toString should return a string representation of the queue', () => {
    queue.enqueue(10).enqueue(20).enqueue(30);

    expect(queue.toString()).toBe(`Queue: [${queue.toArray().join(', ')}]`);
  });
});
