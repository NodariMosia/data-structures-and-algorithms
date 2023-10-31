import bubbleSort from '@algorithms/BubbleSort';

describe('BubbleSort', () => {
  it('should sort array', () => {
    expect(bubbleSort([4, 3, 2, 1])).toEqual([1, 2, 3, 4]);
    expect(bubbleSort([-1, 0, 1, 2])).toEqual([-1, 0, 1, 2]);
    expect(bubbleSort([1, 1, 1, 1])).toEqual([1, 1, 1, 1]);
    expect(bubbleSort([1, 5, -7, 2, 9, 0])).toEqual([-7, 0, 1, 2, 5, 9]);
  });
});
