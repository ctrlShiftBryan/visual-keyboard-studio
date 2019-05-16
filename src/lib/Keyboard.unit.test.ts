import { Keyboard } from './Keyboard';
describe('Keyboard', () => {
  it('can initialized', () => {
    const keeb = new Keyboard('alice');
    expect(keeb.name).toBe('alice');
  });
});

