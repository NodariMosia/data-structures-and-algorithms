const DIRECTIONS = [
  { x: 0, y: -1 }, // UP
  { x: 1, y: 0 }, // RIGHT
  { x: 0, y: 1 }, // DOWN
  { x: -1, y: 0 }, // LEFT
];

/**
 * Recursively walks through a maze to find a path from the current point to the end point.
 * @param maze The maze represented as an array of strings.
 * @param wall The character used to represent walls in the maze.
 * @param curr The current point in the maze.
 * @param end The end point in the maze.
 * @param path An array of points representing the current path through the maze.
 * @param seen A 2D boolean array representing which points have already been visited.
 * @returns True if a path from the current point to the end point was found, false otherwise.
 */
function walk(
  maze: string[],
  wall: string,
  curr: Point2D,
  end: Point2D,
  path: Point2D[],
  seen: boolean[][]
): boolean {
  const height = maze.length;
  const width = maze[0]?.length ?? 0;

  const isMapEmpty = height === 0 || width === 0;
  const isOutOfBounds = curr.x < 0 || curr.x >= width || curr.y < 0 || curr.y >= height;
  const isWall = maze[curr.y]?.[curr.x] === wall;
  const isSeen = !!seen[curr.y]?.[curr.x];

  if (isMapEmpty || isOutOfBounds || isWall || isSeen) {
    return false;
  }

  path.push(curr);
  seen[curr.y]![curr.x] = true;

  const isEnd = curr.x === end.x && curr.y === end.y;

  if (isEnd) {
    return true;
  }

  for (const dir of DIRECTIONS) {
    const newCurr = { x: curr.x + dir.x, y: curr.y + dir.y };

    if (walk(maze, wall, newCurr, end, path, seen)) {
      return true;
    }
  }

  path.pop();

  return false;
}

/**
 * Solves a maze represented as an array of strings, finding a path from the start point to the end point.
 * @param maze The maze represented as an array of strings.
 * @param wall The character used to represent walls in the maze.
 * @param start The starting point in the maze.
 * @param end The ending point in the maze.
 * @returns An array of points representing the path from the start point to the end point,
 * or an empty array if no path was found.
 */
export default function mazeSolver(
  maze: string[],
  wall: string,
  start: Point2D,
  end: Point2D
): Point2D[] {
  const path: Point2D[] = [];
  const seen: boolean[][] = [];

  for (let i = 0; i < maze.length; i++) {
    seen.push(new Array(maze[0]?.length).fill(false));
  }

  walk(maze, wall, start, end, path, seen);

  return path;
}
