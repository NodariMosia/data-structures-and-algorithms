/**
 * This function solves the following problem:
 * Given two identical crystal balls that will break if dropped from high enough distance,
 * determine the minimum height at which it will break in the most optimized way.
 * @param steps An array of booleans representing whether a crystal ball will break at that height.
 * @returns The minimum height at which the crystal ball will break, or -1 if it will not break.
 * @timeComplexity `O(sqrt(n))`.
 */
export default function twoCrystalBalls(steps: boolean[]): number {
  const jumpAmount = Math.floor(Math.sqrt(steps.length));

  let firstBreakpoint = jumpAmount;

  for (; firstBreakpoint < steps.length; firstBreakpoint += jumpAmount) {
    if (steps[firstBreakpoint]) {
      break;
    }
  }

  const searchOffset = firstBreakpoint - jumpAmount;

  for (let i = 0; i <= jumpAmount && searchOffset < steps.length; i++) {
    const height = searchOffset + i;

    if (steps[height]) {
      return height;
    }
  }

  return -1;
}
