export class Parser {
  public name: string;
  public rows: number;
  public jsonRows: any[];
  constructor(source: string) {
    const json = JSON.parse(source);
    this.name = "";
    this.rows = 0;
    this.jsonRows = [];
    for (const x of json) {
      if (x.name !== undefined) {
        this.name = x.name;
      } else {
        this.rows++;
        this.jsonRows.push(x);
      }
    }
  }
}
