const ARRAY_SIZES = [0, 1, 2, 3, 5, 10, 100, 1000];

export function testSortingFunction(sort: (array: number[]) => number[]) {
  it('should sort array', () => {
    ARRAY_SIZES.forEach((length) => {
      const array = Array.from({ length }, () => Math.floor(Math.random() * length));
      const sortedArray = array.slice().sort((a, b) => a - b);

      expect(sort(array)).toEqual(sortedArray);
    });
  });
}
