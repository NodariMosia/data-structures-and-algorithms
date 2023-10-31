import LinkedList from '@dataStructures/LinkedList';
import { testListImplementation } from '@utils/ListTests';

describe('LinkedList', () => {
  testListImplementation({
    constructor: LinkedList,
    className: 'LinkedList',
    toStringSeparator: ' <-> ',
  });
});
