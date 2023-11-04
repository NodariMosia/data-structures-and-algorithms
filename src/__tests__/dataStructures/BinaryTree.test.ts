import BinaryTree from '@dataStructures/BinaryTree';
import {
  binaryTreeRoot1,
  binaryTreeRoot2,
  completeBinaryTreeRoot,
} from '@utils/BinaryTreeExamples';

describe('BinaryTree', () => {
  const binaryTree1 = new BinaryTree(binaryTreeRoot1);
  const binaryTree2 = new BinaryTree(binaryTreeRoot2);
  const completeBinaryTree = new BinaryTree<number>(completeBinaryTreeRoot);

  test('count should return the number of nodes in the tree', () => {
    expect(binaryTree1.count).toBe(10);
    expect(binaryTree2.count).toBe(11);
  });

  test('height should return the height of the tree', () => {
    expect(binaryTree1.height).toBe(4);
    expect(binaryTree2.height).toBe(5);
  });

  test('compare should return true if the trees are equal, false otherwise', () => {
    expect(binaryTree1.compare(binaryTree1)).toBe(true);
    expect(binaryTree1.compare(binaryTree2)).toBe(false);
  });

  test('preOrderTraversal should return an array of values in the order they were visited', () => {
    expect(binaryTree1.preOrderTraversal()).toEqual([20, 10, 5, 7, 15, 50, 30, 29, 45, 100]);
    expect(binaryTree2.preOrderTraversal()).toEqual([20, 10, 5, 7, 15, 50, 30, 29, 21, 45, 49]);
  });

  test('inOrderTraversal should return an array of values in the order they were visited', () => {
    expect(binaryTree1.inOrderTraversal()).toEqual([5, 7, 10, 15, 20, 29, 30, 45, 50, 100]);
    expect(binaryTree2.inOrderTraversal()).toEqual([5, 7, 10, 15, 20, 21, 29, 30, 45, 49, 50]);
  });

  test('postOrderTraversal should return an array of values in the order they were visited', () => {
    expect(binaryTree1.postOrderTraversal()).toEqual([7, 5, 15, 10, 29, 45, 30, 100, 50, 20]);
    expect(binaryTree2.postOrderTraversal()).toEqual([7, 5, 15, 10, 21, 29, 49, 45, 30, 50, 20]);
  });

  test('depthFirstSearch should return true if the value is found, false otherwise', () => {
    expect(binaryTree1.depthFirstSearch(7)).toBe(true);
    expect(binaryTree1.depthFirstSearch(8)).toBe(false);
  });

  test('breadthFirstSearch should return true if the value is found, false otherwise', () => {
    expect(binaryTree1.breadthFirstSearch(7)).toBe(true);
    expect(binaryTree1.breadthFirstSearch(8)).toBe(false);
  });

  test('insert should insert a value into the tree', () => {
    const binaryTree = new BinaryTree<number>();

    binaryTree.insert(20).insert(10).insert(50).insert(5).insert(15).insert(30).insert(100);

    expect(binaryTree.count).toBe(7);
    expect(binaryTree.height).toBe(3);
    expect(binaryTree.compare(completeBinaryTree)).toBe(true);
  });

  test('remove should remove a value from the tree', () => {
    const binaryTree = new BinaryTree<number>();

    /*            20
     *          /   \
     *        10     50
     *      /  \    /  \
     *     5  15  30   100
     *   /  \
     *  7   29
     */
    binaryTree
      .insert(20)
      .insert(10)
      .insert(50)
      .insert(5)
      .insert(15)
      .insert(30)
      .insert(100)
      .insert(7)
      .insert(29);

    /*            20
     *          /   \
     *        10     29
     *      /  \    /  \
     *     5  15  30   100
     *   /
     *  7
     */
    expect(binaryTree.remove(50)).toBe(true);
    expect(binaryTree.count).toBe(8);
    expect(binaryTree.height).toBe(4);
    expect(binaryTree.preOrderTraversal()).toEqual([20, 10, 5, 7, 15, 29, 30, 100]);

    /*         7
     *       /   \
     *     10     29
     *   /  \    /  \
     *  5  15  30   100
     */
    expect(binaryTree.remove(20)).toBe(true);
    expect(binaryTree.count).toBe(7);
    expect(binaryTree.height).toBe(3);
    expect(binaryTree.preOrderTraversal()).toEqual([7, 10, 5, 15, 29, 30, 100]);

    /*         7
     *       /   \
     *     100    29
     *   /  \    /
     *  5  15  30
     */
    expect(binaryTree.remove(10)).toBe(true);
    expect(binaryTree.count).toBe(6);
    expect(binaryTree.height).toBe(3);
    expect(binaryTree.preOrderTraversal()).toEqual([7, 100, 5, 15, 29, 30]);

    expect(binaryTree.remove(100)).toBe(true);
    expect(binaryTree.remove(15)).toBe(true);
    expect(binaryTree.remove(15)).toBe(false);
    expect(binaryTree.remove(5)).toBe(true);
    expect(binaryTree.remove(30)).toBe(true);
    expect(binaryTree.remove(29)).toBe(true);
    expect(binaryTree.count).toBe(1);
    expect(binaryTree.height).toBe(1);
    expect(binaryTree.preOrderTraversal()).toEqual([7]);

    expect(binaryTree.remove(7)).toBe(true);
    expect(binaryTree.remove(7)).toBe(false);
    expect(binaryTree.count).toBe(0);
    expect(binaryTree.height).toBe(0);
    expect(binaryTree.preOrderTraversal()).toEqual([]);
  });
});
