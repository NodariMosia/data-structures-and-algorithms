import ArrayList from '../ArrayList';

test('ArrayList.echo', () => {
  const arrayList = new ArrayList();
  expect(arrayList.echo(1)).toBe(1);
});
