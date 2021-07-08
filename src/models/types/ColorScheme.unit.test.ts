import { ColorScheme, IColorScheme } from './ColorScheme';
describe('ColorScheme', () => {
  it('can be constructed', () => {
    const c = new ColorScheme({ id: '123' } as IColorScheme);
    expect(c.id).toEqual('123');
    expect(c.getColor('primary')).toEqual('#111111');
  });

  it('will generate and id if not passed to constructor', () => {
    const c = new ColorScheme({} as IColorScheme);
    expect(c.id).not.toEqual('123');
  });

  it('it has a list of colors groups', () => {
    const c = new ColorScheme({} as IColorScheme);
    expect(c.groups()).toEqual(['primary', 'secondary']);
  });

  it('will return a color from all groups', () => {
    const c = new ColorScheme({} as IColorScheme);
    c.groups().forEach(color => {
      expect(c.getColor(color)).toBeDefined();
    });
  });

  it('will throw and error if not found', () => {
    const c = new ColorScheme({} as IColorScheme);
    expect(() => {
      c.getColor('nope');
    }).toThrow(Error("color: nope doesn't exist"));
  });
});
