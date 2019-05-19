import { Key } from "./Key";

export class Row {
  public keysCount: number;
  public keys: Key[];
  currentXOffset: number;
  currentYOffset: number;
  additionalWidth: number;
  constructor(row: any, count: number = 0) {
    this.keysCount = 0;
    let keyMeta: any = {};
    this.keys = [];
    this.currentXOffset = 0;
    this.currentYOffset = 0;
    this.additionalWidth = 0;
    for (const x of row) {
      if (typeof x === "object") {
        keyMeta = x;
      } else {
        // check for additional offsets
        if (keyMeta.x !== undefined) {
          this.currentXOffset += keyMeta.x;
        }

        if (keyMeta.y !== undefined) {
          this.currentYOffset += keyMeta.y;
        }

        // check for additional width
        if (keyMeta.w !== undefined) {
          this.additionalWidth += keyMeta.w - 1;
        }

        this.keys
          .push
          // new Key(
          //   x,
          //   keyMeta,
          //   this.keysCount + this.currentXOffset + this.additionalWidth,
          //   0 + count + this.currentYOffset
          // )
          ();

        this.keysCount++;
        keyMeta = {};
      }
    }
  }
}
