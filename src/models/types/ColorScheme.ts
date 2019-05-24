import { Guid } from "guid-typescript";
import { IColorScheme } from "../interfaces/Interfaces";

export class ColorScheme implements IColorScheme {
  primaryColor: string = "";
  secondaryColor: string = "";
  constructor(params: IColorScheme) {
    // init any params passed in
    for (const [k, v] of Object.entries(params)) {
      (<any>this)[k] = v;
    }

    //set an id if not passed in
    if (params.id === undefined) {
      this.id = Guid.create().toString();
    } else {
      this.id = params.id;
    }
  }

  public id: string;
}
