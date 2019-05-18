export class Key {
  public text: string;
  public meta: object;
  public x: number;
  public y: number;

  constructor(text = "", meta = {}, x = 0, y = 0) {
    this.text = text;
    this.meta = meta;
    this.x = x;
    this.y = y;
  }
}
