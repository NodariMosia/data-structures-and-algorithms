import insertionSort from '@algorithms/InsertionSort';
import { testSortingFunction } from '@utils/SortTests';

describe('InsertionSort', () => {
  testSortingFunction(insertionSort);
});
