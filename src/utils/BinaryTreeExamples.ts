/**
 * Binary tree example (1):
 * ```
 *           20
 *         /   \
 *       10     50
 *     /  \    /  \
 *    5  15  30   100
 *    \     /  \
 *    7   29  45
 * ```
 */
export const binaryTreeRoot1: BinaryTreeNode<number> = {
  value: 20,
  left: {
    value: 10,
    left: {
      value: 5,
      left: null,
      right: {
        value: 7,
        right: null,
        left: null,
      },
    },
    right: {
      value: 15,
      right: null,
      left: null,
    },
  },
  right: {
    value: 50,
    left: {
      value: 30,
      left: {
        value: 29,
        right: null,
        left: null,
      },
      right: {
        value: 45,
        right: null,
        left: null,
      },
    },
    right: {
      value: 100,
      right: null,
      left: null,
    },
  },
};

/**
 * Binary tree example (2):
 * ```
 *           20
 *         /   \
 *      10      50
 *     /  \     /
 *    5   15   30
 *     \      /  \
 *      7    29   45
 *          /       \
 *         21        49
 * ```
 */
export const binaryTreeRoot2: BinaryTreeNode<number> = {
  value: 20,
  left: {
    value: 10,
    left: {
      value: 5,
      left: null,
      right: {
        value: 7,
        right: null,
        left: null,
      },
    },
    right: {
      value: 15,
      right: null,
      left: null,
    },
  },
  right: {
    value: 50,
    left: {
      value: 30,
      left: {
        value: 29,
        left: {
          value: 21,
          right: null,
          left: null,
        },
        right: null,
      },
      right: {
        value: 45,
        left: null,
        right: {
          value: 49,
          left: null,
          right: null,
        },
      },
    },
    right: null,
  },
};

/**
 * Complete binary tree example:
 * ```
 *           20
 *         /   \
 *       10     50
 *     /  \    /  \
 *    5  15  30   100
 * ```
 */
export const completeBinaryTreeRoot: BinaryTreeNode<number> = {
  value: 20,
  right: {
    value: 50,
    right: {
      value: 100,
      right: null,
      left: null,
    },
    left: {
      value: 30,
      right: null,
      left: null,
    },
  },
  left: {
    value: 10,
    right: {
      value: 15,
      right: null,
      left: null,
    },
    left: {
      value: 5,
      right: null,
      left: null,
    },
  },
};
