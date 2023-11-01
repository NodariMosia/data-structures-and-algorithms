import twoCrystalBalls from '@algorithms/TwoCrystalBalls';

describe('TwoCrystalBalls', () => {
  it('should find the breakpoint', () => {
    const randomIndex = Math.floor(Math.random() * 10000);
    const steps = new Array(10000).fill(false);

    for (let i = randomIndex; i < 10000; ++i) {
      steps[i] = true;
    }

    expect(twoCrystalBalls([])).toBe(-1);
    expect(twoCrystalBalls([true])).toBe(0);
    expect(twoCrystalBalls([false])).toBe(-1);
    expect(twoCrystalBalls([true, true])).toBe(0);
    expect(twoCrystalBalls([false, true])).toBe(1);
    expect(twoCrystalBalls([false, false])).toBe(-1);
    expect(twoCrystalBalls(new Array(987).fill(false))).toBe(-1);
    expect(twoCrystalBalls(steps)).toEqual(randomIndex);
  });
});
