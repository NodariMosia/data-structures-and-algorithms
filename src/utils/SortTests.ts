const ARRAY_SIZES = [0, 1, 2, 3, 5, 10, 100, 1000];

export function testSortingFunction(sort: (array: number[]) => number[]) {
  it('should sort array', () => {
    ARRAY_SIZES.forEach((length) => {
      const array = Array.from({ length }, () => {
        const sign = Math.random() < 0.5 ? -1 : 1;
        const randomNum = Math.floor(Math.random() * 100_000);

        return sign * randomNum;
      });

      const sortedArray = array.slice().sort((a, b) => a - b);

      expect(sort(array)).toEqual(sortedArray);
    });
  });
}
