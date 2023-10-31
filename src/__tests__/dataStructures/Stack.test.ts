import Stack from '@dataStructures/Stack';

describe('Stack', () => {
  let stack: Stack<number>;

  beforeEach(() => {
    stack = new Stack();
  });

  test('constructor should create an empty stack', () => {
    expect(stack.length).toBe(0);
    expect(stack.peek()).toBeUndefined();
    expect(stack.toArray()).toEqual([]);
  });

  test('constructor should create a stack with the specified items', () => {
    stack = new Stack(10, 20, 30);

    expect(stack.length).toBe(3);
    expect(stack.toArray()).toEqual([30, 20, 10]);
  });

  test('push should add an item to the stack', () => {
    stack.push(10).push(20).push(30);

    expect(stack.length).toBe(3);
    expect(stack.toArray()).toEqual([30, 20, 10]);
  });

  test('pop should remove and return the last item in the stack', () => {
    stack.push(10).push(20).push(30);

    expect(stack.pop()).toBe(30);
    expect(stack.length).toBe(2);
    expect(stack.toArray()).toEqual([20, 10]);

    expect(stack.pop()).toBe(20);
    expect(stack.pop()).toBe(10);
    expect(stack.pop()).toBeUndefined();
    expect(stack.length).toBe(0);
    expect(stack.peek()).toBeUndefined();
    expect(stack.toArray()).toEqual([]);
  });

  test('peek should return the last item in the stack', () => {
    stack.push(10).push(20).push(30);

    expect(stack.peek()).toBe(30);
    expect(stack.length).toBe(3);
    expect(stack.toArray()).toEqual([30, 20, 10]);

    stack.pop();
    stack.pop();
    expect(stack.peek()).toBe(10);
    stack.pop();
    expect(stack.length).toBe(0);
    expect(stack.peek()).toBeUndefined();
    expect(stack.toArray()).toEqual([]);
  });

  test('clear should remove all items from the stack', () => {
    stack.push(10).push(20).push(30).clear();

    expect(stack.length).toBe(0);
    expect(stack.peek()).toBeUndefined();
    expect(stack.toArray()).toEqual([]);
  });

  test('toArray should return an array of all items in the stack', () => {
    stack.push(10).push(20).push(30);

    expect(stack.toArray()).toEqual([30, 20, 10]);
  });

  test('toString should return a string representation of the stack', () => {
    stack.push(10).push(20).push(30);

    expect(stack.toString()).toBe(`Stack: [${stack.toArray().join(', ')}]`);
  });
});
