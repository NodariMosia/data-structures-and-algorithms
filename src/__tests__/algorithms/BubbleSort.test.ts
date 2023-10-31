import bubbleSort from '@algorithms/BubbleSort';
import { testSortingFunction } from '@utils/SortTests';

describe('BubbleSort', () => {
  testSortingFunction(bubbleSort);
});
