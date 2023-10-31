import quickSort from '@algorithms/QuickSort';
import { testSortingFunction } from '@utils/SortTests';

describe('QuickSort', () => {
  testSortingFunction(quickSort);
});
