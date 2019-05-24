export class Parser {
  public name: string;
  public rowsCount: number;
  public jsonRows: any[];
  constructor(source: string) {
    const json = JSON.parse(source);
    this.name = '';
    this.rowsCount = 0;
    this.jsonRows = [];
    for (const x of json) {
      if (x.name !== undefined) {
        this.name = x.name;
      } else {
        this.rowsCount++;
        this.jsonRows.push(x);
      }
    }
  }
}
