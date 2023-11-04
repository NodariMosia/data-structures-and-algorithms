/**
 * Represents a point in 2D space with an x and y coordinates.
 */
declare type Point2D = {
  x: number;
  y: number;
};

/**
 * Represents a node in a binary tree.
 * @template TValue The type of the value stored in the node.
 */
declare type BinaryTreeNode<TValue> = {
  value: TValue;
  left: BinaryTreeNode<TValue> | null;
  right: BinaryTreeNode<TValue> | null;
};
