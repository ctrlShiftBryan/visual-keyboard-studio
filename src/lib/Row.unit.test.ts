import { Row } from './Row';
xdescribe('Row', () => {
  it('can initialized', () => {
    const keeb = new Row('alice');
    expect(keeb.name).toBe('alice');
  });
});

