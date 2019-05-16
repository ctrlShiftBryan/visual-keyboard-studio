import { Keyboard } from './Keyboard';
xdescribe('Keyboard', () => {
  it('can initialized', () => {
    const keeb = new Keyboard();
    expect(keeb.name).toBe('');
  });
});

