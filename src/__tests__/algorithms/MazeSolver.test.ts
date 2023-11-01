import mazeSolver, { Point } from '@algorithms/MazeSolver';

function drawPath(rows: string[], path: Point[]) {
  const cells = rows.map((row) => row.split(''));

  path.forEach(({ x, y }) => {
    if (cells[y]?.[x]) {
      cells[y]![x] = '*';
    }
  });

  return cells.map((cell) => cell.join(''));
}

describe('MazeSolver', () => {
  it('should solve the maze', () => {
    const maze = [
      'xxxxxxxxxx x',
      'x        x x',
      'x        x x',
      'x xxxxxxxx x',
      'x          x',
      'x xxxxxxxxxx',
    ];

    const start: Point = { x: 10, y: 0 };
    const end: Point = { x: 1, y: 5 };

    const correctPath: Point[] = [
      { x: 10, y: 0 },
      { x: 10, y: 1 },
      { x: 10, y: 2 },
      { x: 10, y: 3 },
      { x: 10, y: 4 },
      { x: 9, y: 4 },
      { x: 8, y: 4 },
      { x: 7, y: 4 },
      { x: 6, y: 4 },
      { x: 5, y: 4 },
      { x: 4, y: 4 },
      { x: 3, y: 4 },
      { x: 2, y: 4 },
      { x: 1, y: 4 },
      { x: 1, y: 5 },
    ];

    const path = mazeSolver(maze, 'x', start, end);

    expect(drawPath(maze, path)).toEqual(drawPath(maze, correctPath));
  });

  it('should solve the difficult maze', () => {
    const maze = [
      'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
      'x   x     x     x     x     x     x  x',
      'x x x xxx x xxx x xxx x xxx x xxx x xx',
      'x x x   x x   x x   x x   x x   x x  x',
      'x xxx x x x x x xxx x xxx x xxx x xxxx',
      'x     x x   x x   x x   x x   x x    x',
      'xxxxx x xxxxx xx xx xxxxx xxxxx xxxxxx',
      'x           x     x     x     x      x',
      'x x x xxx x xxx xxxxx xxx xxxxx xxxxxx',
      'x x x x x x x   x     x   x     x    x',
      'x xxx x x x xxx xxxxx x x xxxxx xxxxxx',
      'x   x x   x   x         x x   x      x',
      'xxx x xx xxx xx xxxxx xxx xxx xxxxxxxx',
      'x   x x       x x     x x x x        x',
      'x xxx xxxxx x x xxxxx x x x xxxxxxxxxx',
      'x x   x     x x x     x x x          x',
      'x x xxx xxxxx x x xxxxx x xxxxxxxxx xx',
      'x x x   x   x   x       x          x x',
      'x xxxxx x xxxxxxx xxxxxxx xxxxxxxx x x',
      'x       x       x         x        x x',
      'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    ];

    const start: Point = { x: 23, y: 5 };
    const end: Point = { x: 27, y: 19 };

    const correctPath: Point[] = [
      { x: 23, y: 5 },
      { x: 22, y: 5 },
      { x: 21, y: 5 },
      { x: 21, y: 4 },
      { x: 21, y: 3 },
      { x: 21, y: 2 },
      { x: 21, y: 1 },
      { x: 20, y: 1 },
      { x: 19, y: 1 },
      { x: 18, y: 1 },
      { x: 17, y: 1 },
      { x: 17, y: 2 },
      { x: 17, y: 3 },
      { x: 18, y: 3 },
      { x: 19, y: 3 },
      { x: 19, y: 4 },
      { x: 19, y: 5 },
      { x: 19, y: 6 },
      { x: 19, y: 7 },
      { x: 20, y: 7 },
      { x: 21, y: 7 },
      { x: 21, y: 8 },
      { x: 21, y: 9 },
      { x: 21, y: 10 },
      { x: 21, y: 11 },
      { x: 22, y: 11 },
      { x: 23, y: 11 },
      { x: 23, y: 10 },
      { x: 23, y: 9 },
      { x: 24, y: 9 },
      { x: 25, y: 9 },
      { x: 25, y: 10 },
      { x: 25, y: 11 },
      { x: 25, y: 12 },
      { x: 25, y: 13 },
      { x: 25, y: 14 },
      { x: 25, y: 15 },
      { x: 25, y: 16 },
      { x: 25, y: 17 },
      { x: 26, y: 17 },
      { x: 27, y: 17 },
      { x: 28, y: 17 },
      { x: 29, y: 17 },
      { x: 30, y: 17 },
      { x: 31, y: 17 },
      { x: 32, y: 17 },
      { x: 33, y: 17 },
      { x: 34, y: 17 },
      { x: 34, y: 18 },
      { x: 34, y: 19 },
      { x: 33, y: 19 },
      { x: 32, y: 19 },
      { x: 31, y: 19 },
      { x: 30, y: 19 },
      { x: 29, y: 19 },
      { x: 28, y: 19 },
      { x: 27, y: 19 },
    ];

    const path = mazeSolver(maze, 'x', start, end);

    expect(drawPath(maze, path)).toEqual(drawPath(maze, correctPath));
  });

  it('should solve the maze when the start and end points are the same', () => {
    const maze = [
      'xxxxxxxxxx x',
      'x        x x',
      'x        x x',
      'x xxxxxxxx x',
      'x          x',
      'x xxxxxxxxxx',
    ];

    const start: Point = { x: 10, y: 0 };
    const end: Point = { x: 10, y: 0 };

    const correctPath: Point[] = [{ x: 10, y: 0 }];

    const path = mazeSolver(maze, 'x', start, end);

    expect(drawPath(maze, path)).toEqual(drawPath(maze, correctPath));
  });

  it('should return an empty array if no path was found', () => {
    const maze = [
      'xxxxxxxxxx x',
      'x        x x',
      'x        x x',
      'xxxxxxxxxx x',
      'x          x',
      'x xxxxxxxxxx',
    ];

    const start: Point = { x: 10, y: 0 };
    const end: Point = { x: 2, y: 2 };

    const path = mazeSolver(maze, 'x', start, end);

    expect(path).toEqual([]);
  });

  it('should return an empty array if the maze is empty', () => {
    const maze: string[] = [];

    const start: Point = { x: 0, y: 0 };
    const end: Point = { x: 0, y: 0 };

    const path = mazeSolver(maze, 'x', start, end);

    expect(path).toEqual([]);
  });
});
