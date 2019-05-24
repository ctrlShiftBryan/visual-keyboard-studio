import { Guid } from "guid-typescript";
import { IColorScheme } from "./ColorScheme";

export interface IColorScheme {
  primaryColor: string;
  secondaryColor: string;
  id: string;
}

export class ColorScheme {
  colors: [string, string][] = [];
  constructor(params: IColorScheme) {
    // init any params passed in
    //set an id if not passed in
    if (params.id === undefined) {
      this.id = Guid.create().toString();
    } else {
      this.id = params.id;
    }
    this.colors.push(["primary", "#111111"]);
    this.colors.push(["secondary", "#222222"]);
  }

  groups(): string[] {
    return this.colors.map(x => x[0]);
  }

  getColor(group: string): string {
    if (this.groups().includes(group)) {
      const color = this.colors.find(x => x[0] === group);
      if (color) return color[1];
    }
    throw new Error(`color: ${group} doesn't exist`);
  }

  public id: string;
}
