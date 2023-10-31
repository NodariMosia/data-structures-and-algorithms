import quickSort from '@algorithms/QuickSort';

describe('QuickSort', () => {
  it('should sort array', () => {
    expect(quickSort([4, 3, 2, 1])).toEqual([1, 2, 3, 4]);
    expect(quickSort([-1, 0, 1, 2])).toEqual([-1, 0, 1, 2]);
    expect(quickSort([1, 1, 1, 1])).toEqual([1, 1, 1, 1]);
    expect(quickSort([1, 5, -7, 2, 9, 41, 0])).toEqual([-7, 0, 1, 2, 5, 9, 41]);
  });
});
