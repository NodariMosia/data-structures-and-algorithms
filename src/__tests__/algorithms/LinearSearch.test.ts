import linearSearch from '@algorithms/LinearSearch';

describe('linearSearch', () => {
  it('should search for elements in array', () => {
    expect(linearSearch([], 1)).toBe(-1);
    expect(linearSearch([1], 1)).toBe(0);
    expect(linearSearch([1], 2)).toBe(-1);
    expect(linearSearch([1, 2, 3, 4], 4)).toBe(3);
    expect(linearSearch([1, 2, 3, 4], 5)).toBe(-1);
  });
});
