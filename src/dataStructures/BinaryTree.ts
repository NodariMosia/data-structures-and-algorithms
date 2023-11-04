import Queue from './Queue';
import { BinaryTree as IBinaryTree } from './interfaces/BinaryTree.interface';

/**
 * A binary tree data structure is a tree where each node has at most two children (left and right).
 * @see https://en.wikipedia.org/wiki/Binary_tree
 *
 * @template T The type of values stored in the tree.
 */
export default class BinaryTree<T> implements IBinaryTree<T> {
  /**
   * The root (topmost) node of the binary tree.
   */
  protected _root: BinaryTreeNode<T> | null;

  public get root(): BinaryTreeNode<T> | null {
    return this._root;
  }

  /**
   * Creates a new BinaryTree instance.
   * @constructor
   * @template T The type of values stored in the tree.
   * @param root The root node of the binary tree.
   */
  constructor(root: BinaryTreeNode<T> | null = null) {
    this._root = root;
  }

  /**
   * @param node The root of the subtree to count nodes for.
   * @returns The number of nodes in the subtree rooted at the given node.
   */
  private getCountFromNode(node: BinaryTreeNode<T> | null): number {
    if (node === null) {
      return 0;
    }

    return this.getCountFromNode(node.left) + this.getCountFromNode(node.right) + 1;
  }

  /**
   * @param node The node to calculate the height from.
   * @returns The height of the binary tree from the given node.
   */
  private getHeightFromNode(node: BinaryTreeNode<T> | null): number {
    if (node == null) {
      return 0;
    }

    return Math.max(this.getHeightFromNode(node.left), this.getHeightFromNode(node.right)) + 1;
  }

  /**
   * Compares two binary tree nodes recursively.
   * @param a - The first binary tree node to compare.
   * @param b - The second binary tree node to compare.
   * @returns True if the nodes are equal, false otherwise.
   */
  private compareNodes(a: BinaryTreeNode<T> | null, b: BinaryTreeNode<T> | null): boolean {
    if (a === null && b === null) {
      return true;
    }

    if (a === null || b === null) {
      return false;
    }

    if (a.value !== b.value) {
      return false;
    }

    return this.compareNodes(a.left, b.left) && this.compareNodes(a.right, b.right);
  }

  /**
   * Performs a depth-first traversal of the binary tree starting from the given node.
   * @param node The starting node for the traversal.
   * @param path An array to store the values of the nodes visited during the traversal.
   * @param order The order of traversal to perform ('pre', 'in', or 'post').
   * @returns An array containing the values of the nodes visited during the traversal.
   */
  private dfsTraversal(
    node: BinaryTreeNode<T> | null,
    path: T[],
    order: 'pre' | 'in' | 'post'
  ): T[] {
    if (node === null) {
      return path;
    }

    if (order === 'pre') {
      path.push(node.value);
    }

    this.dfsTraversal(node.left, path, order);

    if (order === 'in') {
      path.push(node.value);
    }

    this.dfsTraversal(node.right, path, order);

    if (order === 'post') {
      path.push(node.value);
    }

    return path;
  }

  /**
   * Performs a depth-first search on the binary tree to find the node with the specified value.
   * @param node The current node being visited.
   * @param target The value to search for in the binary tree.
   * @returns True if the value is found, false otherwise.
   */
  protected dfs(node: BinaryTreeNode<T> | null, target: T): boolean {
    if (node === null) {
      return false;
    }

    if (node.value === target) {
      return true;
    }

    return this.dfs(node.left, target) || this.dfs(node.right, target);
  }

  get count() {
    return this.getCountFromNode(this._root);
  }

  get height() {
    return this.getHeightFromNode(this._root);
  }

  compare(other: IBinaryTree<T>): boolean {
    return this.compareNodes(this._root, other.root);
  }

  preOrderTraversal(): T[] {
    return this.dfsTraversal(this._root, [], 'pre');
  }

  inOrderTraversal(): T[] {
    return this.dfsTraversal(this._root, [], 'in');
  }

  postOrderTraversal(): T[] {
    return this.dfsTraversal(this._root, [], 'post');
  }

  depthFirstSearch(value: T): boolean {
    return this.dfs(this._root, value);
  }

  breadthFirstSearch(value: T): boolean {
    if (!this._root) {
      return false;
    }

    const queue = new Queue(this._root);

    while (queue.length) {
      const currentNode = queue.dequeue();

      if (!currentNode) {
        continue;
      }

      if (currentNode.value === value) {
        return true;
      }

      if (currentNode.left) {
        queue.enqueue(currentNode.left);
      }

      if (currentNode.right) {
        queue.enqueue(currentNode.right);
      }
    }

    return false;
  }

  insert(value: T): BinaryTree<T> {
    const node: BinaryTreeNode<T> = { value, left: null, right: null };

    if (!this._root) {
      this._root = node;
      return this;
    }

    const queue = new Queue(this._root);

    while (queue.length) {
      const currentNode = queue.dequeue();

      if (!currentNode) {
        continue;
      }

      if (!currentNode.left) {
        currentNode.left = node;
        return this;
      }

      if (!currentNode.right) {
        currentNode.right = node;
        return this;
      }

      queue.enqueue(currentNode.left);
      queue.enqueue(currentNode.right);
    }

    return this;
  }

  remove(value: T): boolean {
    if (!this._root) {
      return false;
    }

    if (this._root.left === null && this._root.right === null) {
      if (this._root.value === value) {
        this._root = null;
        return true;
      }

      return false;
    }

    // Find the deepest node and the node to remove.

    const queue = new Queue(this._root);
    let nodeToRemove: BinaryTreeNode<T> | undefined = undefined;
    let deepestNode: BinaryTreeNode<T> | undefined = undefined;

    while (queue.length) {
      deepestNode = queue.dequeue();

      if (!deepestNode) {
        continue;
      }

      if (deepestNode.value === value) {
        nodeToRemove = deepestNode;
      }

      if (deepestNode.left) {
        queue.enqueue(deepestNode.left);
      }

      if (deepestNode.right) {
        queue.enqueue(deepestNode.right);
      }
    }

    if (!nodeToRemove || !deepestNode) {
      return false;
    }

    // Replace the node to remove with the deepest node.

    nodeToRemove.value = deepestNode.value;

    // Remove the deepest node.

    queue.enqueue(this._root);

    while (queue.length) {
      const currentNode = queue.dequeue();

      if (!currentNode) {
        continue;
      }

      if (currentNode.left === deepestNode) {
        currentNode.left = null;
        return true;
      }

      if (currentNode.right === deepestNode) {
        currentNode.right = null;
        return true;
      }

      if (currentNode.left) {
        queue.enqueue(currentNode.left);
      }

      if (currentNode.right) {
        queue.enqueue(currentNode.right);
      }
    }

    return false;
  }
}
