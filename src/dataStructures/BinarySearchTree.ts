import BinaryTree from './BinaryTree';

/**
 * A binary search tree is a binary tree where each node has at most two children (left and right),
 * and the value of each node is greater than or equal to the values in its left subtree
 * and less than or equal to the values in its right subtree.
 * @see https://en.wikipedia.org/wiki/Binary_search_tree
 *
 * @template T The type of values stored in the tree.
 */
export default class BinarySearchTree<T extends string | number> extends BinaryTree<T> {
  /**
   * Creates a new BinarySearchTree instance.
   * @constructor
   * @template T The type of values stored in the tree.
   * @param root The root node of the binary search tree.
   */
  constructor(root: BinaryTreeNode<T> | null = null) {
    super(root);
  }

  /**
   * Performs a depth-first search on the binary search tree to find the node with the specified value.
   * This search is performed by comparing the value to search for with the current node.
   * If the value is less than the current node, the search continues in the left subtree.
   * Otherwise, the search continues in the right subtree.
   * @param node The current node being visited.
   * @param target The value to search for in the binary search tree.
   * @returns True if the value is found, false otherwise.
   */
  protected override dfs(node: BinaryTreeNode<T> | null, target: T): boolean {
    if (node === null) {
      return false;
    }

    if (node.value === target) {
      return true;
    }

    if (target < node.value) {
      return this.dfs(node.left, target);
    }

    return this.dfs(node.right, target);
  }

  /**
   * Inserts a new node with the given value into the binary search tree starting from the given node.
   * @param node The node to start inserting from.
   * @param value The value to insert.
   * @returns The root node of the updated binary search tree.
   */
  private insertFromNode(node: BinaryTreeNode<T> | null, value: T): BinaryTreeNode<T> {
    if (node === null) {
      return { value, left: null, right: null };
    }

    if (value < node.value) {
      node.left = this.insertFromNode(node.left, value);
    } else {
      node.right = this.insertFromNode(node.right, value);
    }

    return node;
  }

  /**
   * Removes a node with the given value from the tree starting at the given node.
   * @param node - The root node of the tree to remove the value from.
   * @param value - The value to remove from the tree.
   * @returns The root node of the updated tree.
   */
  private removeFromNode(node: BinaryTreeNode<T> | null, value: T): BinaryTreeNode<T> | null {
    if (node === null) {
      return null;
    }

    if (value < node.value) {
      node.left = this.removeFromNode(node.left, value);
      return node;
    }

    if (value > node.value) {
      node.right = this.removeFromNode(node.right, value);
      return node;
    }

    if (node.left === null) {
      return node.right;
    }

    if (node.right === null) {
      return node.left;
    }

    let successorParent = node;
    let successor = node.right;

    while (successor.left !== null) {
      successorParent = successor;
      successor = successor.left;
    }

    if (successorParent !== node) {
      successorParent.left = successor.right;
    } else {
      successorParent.right = successor.right;
    }

    node.value = successor.value;

    return node;
  }

  /**
   * Depth-first search is a type of search that visits all nodes in a tree by going deeper before visiting siblings.
   * On a binary search tree, this search is performed by comparing the value to search for with the current node.
   * If the value is less than the current node, the search continues in the left subtree.
   * Otherwise, the search continues in the right subtree.
   * @param value The value to search for.
   * @returns True if the value is found, false otherwise.
   */
  override depthFirstSearch(value: T): boolean {
    return this.dfs(this._root, value);
  }

  /**
   * Inserts a value into the binary search tree in the correct position.
   * @param value The value to insert.
   * @returns The binary search tree.
   */
  override insert(value: T): BinarySearchTree<T> {
    this._root = this.insertFromNode(this._root, value);
    return this;
  }

  /**
   * Removes a value from the binary search tree if it exists.
   * Restructures the tree to maintain the binary search tree property.
   * @param value The value to remove.
   * @returns True if the value was removed, false otherwise.
   */
  override remove(value: T): boolean {
    const contains = this.depthFirstSearch(value);

    if (contains) {
      this._root = this.removeFromNode(this._root, value);
    }

    return contains;
  }
}
