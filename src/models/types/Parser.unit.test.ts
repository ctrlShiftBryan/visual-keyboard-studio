import { getFixture } from "../../../tests/fixtures/fixtures";
import { Parser } from "./Parser";
describe("Parser", () => {
  describe("", () => {
    //

    let json;
    let parser: Parser;
    beforeEach(() => {
      //
      json = getFixture("simple.keeb");
      parser = new Parser(json);
    });
    it("can parse a name", () => {
      expect(parser.name).toEqual("simple");
    });

    it("can parse rows", () => {
      const json = getFixture("simple.keeb");
      const parser = new Parser(json);
      expect(parser.rowsCount).toEqual(3);
    });
  });
});
