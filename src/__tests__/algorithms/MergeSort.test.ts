import mergeSort from '@algorithms/MergeSort';
import { testSortingFunction } from '@utils/SortTests';

describe('MergeSort', () => {
  testSortingFunction(mergeSort);
});
