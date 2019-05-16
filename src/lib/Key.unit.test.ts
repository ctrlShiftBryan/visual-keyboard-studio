import { Key } from './Key';
xdescribe('Key', () => {
  it('can initialized', () => {
    const key = new Key('[{x:1},"1x0"]', 2);
    expect(key.x).toBe(1);
    expect(key.y).toBe(0);
  });
});
