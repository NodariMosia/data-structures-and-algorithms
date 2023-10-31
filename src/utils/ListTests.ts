import { List } from '@dataStructures/interfaces/List.interface';

export function testListImplementation<ListImpl extends List<number>>({
  constructor,
  className,
  toStringSeparator,
}: {
  constructor: new (...items: number[]) => ListImpl;
  className: string;
  toStringSeparator: string;
}) {
  let list: ListImpl;

  beforeEach(() => {
    list = new constructor();
  });

  test('constructor should create an empty list', () => {
    expect(list.length).toBe(0);
    expect(list.toArray()).toEqual([]);
  });

  test('constructor should create a list with the specified items', () => {
    list = new constructor(10, 20, 30);

    expect(list.length).toBe(3);
    expect(list.toArray()).toEqual([10, 20, 30]);
  });

  test('insertFirst should add item to the beginning of the list', () => {
    list.insertFirst(10).insertFirst(20).insertFirst(30);

    expect(list.length).toBe(3);
    expect(list.toArray()).toEqual([30, 20, 10]);
  });

  test('insertLast should add item to the end of the list', () => {
    list.insertLast(10).insertLast(20).insertLast(30);

    expect(list.length).toBe(3);
    expect(list.toArray()).toEqual([10, 20, 30]);
  });

  test('insertAt should add item at the specified index', () => {
    list.insertLast(10).insertLast(20).insertLast(30).insertAt(40, 1);

    expect(list.length).toBe(4);
    expect(list.toArray()).toEqual([10, 40, 20, 30]);
  });

  test('removeFirst should remove and return the first item from the list', () => {
    list.insertLast(10).insertLast(20).insertLast(30);

    expect(list.removeFirst()).toBe(10);
    expect(list.length).toBe(2);
    expect(list.toArray()).toEqual([20, 30]);

    expect(list.removeFirst()).toBe(20);
    expect(list.removeFirst()).toBe(30);
    expect(list.removeFirst()).toBeUndefined();
    expect(list.length).toBe(0);
    expect(list.toArray()).toEqual([]);
  });

  test('removeLast should remove and return the last item from the list', () => {
    list.insertLast(10).insertLast(20).insertLast(30);

    expect(list.removeLast()).toBe(30);
    expect(list.length).toBe(2);
    expect(list.toArray()).toEqual([10, 20]);

    expect(list.removeLast()).toBe(20);
    expect(list.removeLast()).toBe(10);
    expect(list.removeLast()).toBeUndefined();
    expect(list.length).toBe(0);
    expect(list.toArray()).toEqual([]);
  });

  test('removeAt should remove and return the item at the specified index', () => {
    list.insertLast(10).insertLast(20).insertLast(30);

    expect(list.removeAt(1)).toBe(20);
    expect(list.length).toBe(2);
    expect(list.toArray()).toEqual([10, 30]);

    expect(list.removeAt(1)).toBe(30);
    expect(list.removeAt(1)).toBeUndefined();
    expect(list.removeAt(0)).toBe(10);
    expect(list.removeAt(0)).toBeUndefined();
    expect(list.length).toBe(0);
    expect(list.toArray()).toEqual([]);
  });

  test('remove should remove the first occurrence of the specified item', () => {
    list.insertLast(10).insertLast(20).insertLast(30);

    expect(list.remove(20)).toBe(true);
    expect(list.remove(40)).toBe(false);
    expect(list.length).toBe(2);
    expect(list.toArray()).toEqual([10, 30]);
  });

  test('getFirst should return the first item in the list', () => {
    list.insertLast(10).insertLast(20).insertLast(30);

    expect(list.getFirst()).toBe(10);
  });

  test('getLast should return the last item in the list', () => {
    list.insertLast(10).insertLast(20).insertLast(30);

    expect(list.getLast()).toBe(30);
  });

  test('getAt should return item at the specified index', () => {
    list.insertLast(10).insertLast(20).insertLast(30);

    expect(list.getAt(1)).toBe(20);
  });

  test('indexOf should return the index of the specified item', () => {
    list.insertLast(10).insertLast(20).insertLast(30);

    expect(list.indexOf(20)).toBe(1);
  });

  test('contains should return true if the item is in the list', () => {
    list.insertLast(10).insertLast(20).insertLast(30);

    expect(list.contains(20)).toBe(true);
  });

  test('contains should return false if the item is not in the list', () => {
    list.insertLast(10).insertLast(20).insertLast(30);

    expect(list.contains(40)).toBe(false);
  });

  test('clear should remove all items from the list', () => {
    list.insertLast(10).insertLast(20).insertLast(30).clear();

    expect(list.length).toBe(0);
    expect(list.toArray()).toEqual([]);
  });

  test('toArray should return an array of all items in the list', () => {
    list.insertLast(10).insertLast(20).insertLast(30);

    expect(list.toArray()).toEqual([10, 20, 30]);
  });

  test('toString should return a string representation of the list', () => {
    list.insertLast(10).insertLast(20).insertLast(30);

    expect(list.toString()).toBe(`${className}: [${list.toArray().join(toStringSeparator)}]`);
  });
}
