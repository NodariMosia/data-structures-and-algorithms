import binarySearch from '@algorithms/BinarySearch';

describe('binarySearch', () => {
  it('should search for elements in array', () => {
    expect(binarySearch([], 1)).toBe(-1);
    expect(binarySearch([1], 1)).toBe(0);
    expect(binarySearch([1], 2)).toBe(-1);
    expect(binarySearch([1, 2], 1)).toBe(0);
    expect(binarySearch([1, 2], 2)).toBe(1);
    expect(binarySearch([1, 2], 3)).toBe(-1);
    expect(binarySearch([1, 2, 3, 4], 1)).toBe(0);
    expect(binarySearch([1, 2, 3, 4], 2)).toBe(1);
    expect(binarySearch([1, 2, 3, 4], 3)).toBe(2);
    expect(binarySearch([1, 2, 3, 4], 4)).toBe(3);
    expect(binarySearch([1, 2, 3, 4], 5)).toBe(-1);
    expect(binarySearch([1, 2, 3, 4, 5], 1)).toBe(0);
    expect(binarySearch([1, 2, 3, 4, 5], 2)).toBe(1);
    expect(binarySearch([1, 2, 3, 4, 5], 3)).toBe(2);
    expect(binarySearch([1, 2, 3, 4, 5], 4)).toBe(3);
    expect(binarySearch([1, 2, 3, 4, 5], 5)).toBe(4);
    expect(binarySearch([1, 2, 3, 4, 5], 6)).toBe(-1);
  });
});
