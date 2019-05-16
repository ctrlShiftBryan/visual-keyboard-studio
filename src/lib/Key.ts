class Key {
  public x: number;
  public y: number;
  public rx: number;
  public ry: number;
  public r: number;
  public text: string;

  constructor(source: string, total: number) {
     this.x = 0;
     this.y = 0;
     this.rx = 0;
     this.ry = 0;
     this.r = 0;
     this.text = '';
  }
}

export { Key };

