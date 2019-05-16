import { getFixture } from '../../tests/unit/fixtures';
import { Parser } from './Parser';
describe('Parser', () => {
 describe('', () => {
   //

  it('can parse a name', () => {
    const json = getFixture('simple.keeb');
    const parser = new Parser(json);
    expect(parser.name).toEqual('simple');
  })

  it('can parse rows', () => {
    const json = getFixture('simple.keeb');
    const parser = new Parser(json);
    expect(parser.rows).toEqual(3);
  })
 }); 
});


