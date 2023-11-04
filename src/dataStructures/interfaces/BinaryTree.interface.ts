/**
 * An interface representing a binary tree data structure.
 * @template T The type of values stored in the binary tree.
 */
export interface BinaryTree<T> {
  /**
   * The root (topmost) node of the binary tree.
   */
  readonly root: BinaryTreeNode<T> | null;

  /**
   * The number of nodes in the binary tree.
   */
  readonly count: number;

  /**
   * The height of the binary tree.
   */
  readonly height: number;

  /**
   * Compares two binary trees structurally and by value to determine if they are equal.
   * @param other The other binary tree to compare.
   * @returns True if the trees are equal, false otherwise.
   */
  compare: (other: BinaryTree<T>) => boolean;

  /**
   * Pre-order traversal is a type of depth-first traversal that visits nodes in the following order:
   * 1. Parent
   * 2. Left child
   * 3. Right child
   *
   * @returns An array of values in the order they were visited.
   */
  preOrderTraversal: () => T[];

  /**
   * In-order traversal is a type of depth-first traversal that visits nodes in the following order:
   * 1. Left child
   * 2. Parent
   * 3. Right child
   *
   * @returns An array of values in the order they were visited.
   */
  inOrderTraversal: () => T[];

  /**
   * Post-order traversal is a type of depth-first traversal that visits nodes in the following order:
   * 1. Left child
   * 2. Right child
   * 3. Parent
   *
   * @returns An array of values in the order they were visited.
   */
  postOrderTraversal: () => T[];

  /**
   * Depth-first search is a type of search that visits all nodes in a tree by going deeper before visiting siblings.
   * @param value The value to search for.
   * @returns True if the value is found, false otherwise.
   */
  depthFirstSearch: (value: T) => boolean;

  /**
   * Breadth-first search is a type of search that visits all nodes in a tree by level before going deeper.
   * @param value The value to search for.
   * @returns True if the value is found, false otherwise.
   */
  breadthFirstSearch: (value: T) => boolean;

  /**
   * Inserts a value into the binary tree at the first position available in level order traversal.
   * @param value The value to insert.
   * @returns The binary tree.
   */
  insert: (value: T) => BinaryTree<T>;

  /**
   * Removes a value from the binary tree by replacing it with the last node in level order traversal.
   * @param value The value to remove.
   * @returns True if the value was removed, false otherwise.
   */
  remove: (value: T) => boolean;
}
