import BinarySearchTree from '@dataStructures/BinarySearchTree';
import { completeOrderedBinaryTreeRoot } from '@utils/BinaryTreeExamples';

describe('BinarySearchTree', () => {
  const binarySearchTree = new BinarySearchTree<number>(completeOrderedBinaryTreeRoot);

  test('count should return the number of nodes in the tree', () => {
    expect(binarySearchTree.count).toBe(7);
  });

  test('height should return the height of the tree', () => {
    expect(binarySearchTree.height).toBe(3);
  });

  test('compare should return true if the trees are equal, false otherwise', () => {
    const bst = new BinarySearchTree<number>({ value: 20, left: null, right: null });

    expect(binarySearchTree.compare(binarySearchTree)).toBe(true);
    expect(binarySearchTree.compare(bst)).toBe(false);
  });

  test('preOrderTraversal should return an array of values in the order they were visited', () => {
    expect(binarySearchTree.preOrderTraversal()).toEqual([20, 10, 5, 15, 50, 30, 100]);
  });

  test('inOrderTraversal should return an array of values in the order they were visited', () => {
    expect(binarySearchTree.inOrderTraversal()).toEqual([5, 10, 15, 20, 30, 50, 100]);
  });

  test('postOrderTraversal should return an array of values in the order they were visited', () => {
    expect(binarySearchTree.postOrderTraversal()).toEqual([5, 15, 10, 30, 100, 50, 20]);
  });

  test('depthFirstSearch should return true if the value is found, false otherwise', () => {
    expect(binarySearchTree.depthFirstSearch(30)).toBe(true);
    expect(binarySearchTree.depthFirstSearch(31)).toBe(false);
  });

  test('breadthFirstSearch should return true if the value is found, false otherwise', () => {
    expect(binarySearchTree.breadthFirstSearch(30)).toBe(true);
    expect(binarySearchTree.breadthFirstSearch(31)).toBe(false);
  });

  test('insert should insert a value into the tree', () => {
    const bst = new BinarySearchTree<number>();

    /*        20
     *      /   \
     *    10     50
     *  /  \    /  \
     * 5  15  30   100
     */
    bst.insert(20).insert(10).insert(50).insert(5).insert(15).insert(30).insert(100);

    expect(bst.count).toBe(7);
    expect(bst.height).toBe(3);
    expect(bst.compare(binarySearchTree)).toBe(true);
  });

  test('remove should remove a value from the tree', () => {
    const bst = new BinarySearchTree<number>();

    /*        20
     *      /   \
     *    10     50
     *  /  \    /  \
     * 5  15  30   100
     */
    bst.insert(20).insert(10).insert(50).insert(5).insert(15).insert(30).insert(100);

    /*        20
     *      /   \
     *    15     50
     *  /       /  \
     * 5      30   100
     */
    expect(bst.remove(10)).toBe(true);
    expect(bst.count).toBe(6);
    expect(bst.height).toBe(3);
    expect(bst.preOrderTraversal()).toEqual([20, 15, 5, 50, 30, 100]);

    /*        30
     *      /   \
     *    15     50
     *  /          \
     * 5           100
     */
    expect(bst.remove(20)).toBe(true);
    expect(bst.count).toBe(5);
    expect(bst.height).toBe(3);
    expect(bst.preOrderTraversal()).toEqual([30, 15, 5, 50, 100]);

    /*        50
     *      /   \
     *    15     100
     *  /
     * 5
     */
    expect(bst.remove(30)).toBe(true);
    expect(bst.count).toBe(4);
    expect(bst.height).toBe(3);
    expect(bst.preOrderTraversal()).toEqual([50, 15, 5, 100]);

    /*     50
     *   /   \
     * 15     100
     */
    expect(bst.remove(5)).toBe(true);
    expect(bst.count).toBe(3);
    expect(bst.height).toBe(2);
    expect(bst.preOrderTraversal()).toEqual([50, 15, 100]);

    expect(bst.remove(50)).toBe(true);
    expect(bst.remove(15)).toBe(true);
    expect(bst.remove(15)).toBe(false);
    expect(bst.count).toBe(1);
    expect(bst.height).toBe(1);
    expect(bst.preOrderTraversal()).toEqual([100]);

    expect(bst.remove(100)).toBe(true);
    expect(bst.count).toBe(0);
    expect(bst.height).toBe(0);
    expect(bst.preOrderTraversal()).toEqual([]);
  });
});
