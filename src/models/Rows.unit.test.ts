import { getFixture } from '../../tests/fixtures/fixtures';
import { Row } from './Row';
describe('Parser', () => {
  describe('', () => {
    //

    let json;
    let parsed: any;
    beforeEach(() => {
      json = getFixture('104.keeb');
      parsed = JSON.parse(json);
    });
    it('can parse a name', () => {
      const row = new Row(parsed[1], 1);
      const expectedResults = [
        { text: '~\n`', meta: { y: 0.5 }, y: 1.5, x: 0 },
        { text: '!\n1', meta: {}, y: 1.5, x: 1 },
        { text: '@\n2', meta: {}, y: 1.5, x: 2 },
        { text: '#\n3', meta: {}, y: 1.5, x: 3 },
        { text: '$\n4', meta: {}, y: 1.5, x: 4 },
        { text: '%\n5', meta: {}, y: 1.5, x: 5 },
        { text: '^\n6', meta: {}, y: 1.5, x: 6 },
        { text: '&\n7', meta: {}, y: 1.5, x: 7 },
        { text: '*\n8', meta: {}, y: 1.5, x: 8 },
        { text: '(\n9', meta: {}, y: 1.5, x: 9 },
        { text: ')\n0', meta: {}, y: 1.5, x: 10 },
        { text: '_\n-', meta: {}, y: 1.5, x: 11 },
        { text: '+\n=', meta: {}, y: 1.5, x: 12 },
        { text: 'Backspace', meta: { w: 2 }, y: 1.5, x: 14 },
        { text: 'Insert', meta: { x: 0.25 }, y: 1.5, x: 15.25 },
        { text: 'Home', meta: {}, y: 1.5, x: 16.25 },
        { text: 'PgUp', meta: {}, y: 1.5, x: 17.25 },
        { text: 'Num Lock', meta: { x: 0.25 }, y: 1.5, x: 18.5 },
        { text: '/', meta: {}, y: 1.5, x: 19.5 },
        { text: '*', meta: {}, y: 1.5, x: 20.5 },
        { text: '-', meta: {}, y: 1.5, x: 21.5 }
      ];
      expect(row.keys).toEqual(expectedResults);
    });
  });
});
