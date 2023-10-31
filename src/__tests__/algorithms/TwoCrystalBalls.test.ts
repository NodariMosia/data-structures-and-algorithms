import twoCrystalBalls from '@algorithms/TwoCrystalBalls';

function getSteps(length: number, breakpoint: number): boolean[] {
  if (length <= 0) {
    return [];
  }

  if (breakpoint < 0 || breakpoint >= length) {
    return new Array(length).fill(false);
  }

  return new Array(length).fill(false, 0, breakpoint).fill(true, breakpoint);
}

describe('twoCrystalBalls', () => {
  it('should find the breakpoint in the most optimized way', () => {
    expect(twoCrystalBalls([])).toBe(-1);
    expect(twoCrystalBalls(getSteps(1, 0))).toBe(0);
    expect(twoCrystalBalls(getSteps(1, -1))).toBe(-1);
    expect(twoCrystalBalls(getSteps(2, 0))).toBe(0);
    expect(twoCrystalBalls(getSteps(2, 1))).toBe(1);
    expect(twoCrystalBalls(getSteps(2, -1))).toBe(-1);
    expect(twoCrystalBalls(getSteps(3, 0))).toBe(0);
    expect(twoCrystalBalls(getSteps(3, 1))).toBe(1);
    expect(twoCrystalBalls(getSteps(3, 2))).toBe(2);
    expect(twoCrystalBalls(getSteps(3, -1))).toBe(-1);
    expect(twoCrystalBalls(getSteps(4, 0))).toBe(0);
    expect(twoCrystalBalls(getSteps(4, 1))).toBe(1);
    expect(twoCrystalBalls(getSteps(4, 2))).toBe(2);
    expect(twoCrystalBalls(getSteps(4, 3))).toBe(3);
    expect(twoCrystalBalls(getSteps(4, -1))).toBe(-1);
    expect(twoCrystalBalls(getSteps(5, 0))).toBe(0);
    expect(twoCrystalBalls(getSteps(5, 1))).toBe(1);
    expect(twoCrystalBalls(getSteps(5, 2))).toBe(2);
    expect(twoCrystalBalls(getSteps(5, 3))).toBe(3);
    expect(twoCrystalBalls(getSteps(5, 4))).toBe(4);
    expect(twoCrystalBalls(getSteps(5, -1))).toBe(-1);
  });
});
