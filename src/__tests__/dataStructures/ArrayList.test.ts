import ArrayList from '@dataStructures/ArrayList';
import { testListImplementation } from '@utils/ListTests';

describe('ArrayList', () => {
  testListImplementation({
    constructor: ArrayList,
    className: 'ArrayList',
    toStringSeparator: ', ',
  });
});
