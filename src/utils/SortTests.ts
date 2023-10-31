export function testSortingFunction(sort: (array: number[]) => number[]) {
  it('should sort array', () => {
    expect(sort([])).toEqual([]);
    expect(sort([1])).toEqual([1]);
    expect(sort([1, 1, 1, 1])).toEqual([1, 1, 1, 1]);
    expect(sort([4, 3, 2, 1])).toEqual([1, 2, 3, 4]);
    expect(sort([-1, 0, 2, 1])).toEqual([-1, 0, 1, 2]);
    expect(sort([1, 5, -7, 2, 9, 0])).toEqual([-7, 0, 1, 2, 5, 9]);
    expect(sort([1, 5, -7, 2, 9, 41, 0])).toEqual([-7, 0, 1, 2, 5, 9, 41]);
  });
}
