import { IColorScheme } from "../interfaces/Interfaces";
import { ColorScheme } from "./ColorScheme";
describe("ColorScheme", () => {
  it("can be constructed", () => {
    const c = new ColorScheme({ id: "123" } as IColorScheme);
    expect(c.id).toEqual("123");
    expect(c.primaryColor).toEqual("");
  });

  it("will generate and id if not passed to constructor", () => {
    const c = new ColorScheme({} as IColorScheme);
    expect(c.id).not.toEqual("123");
  });
});
