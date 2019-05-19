import { Guid } from "guid-typescript";

export class Key {
  constructor(props: any = {}) {
    if (props !== {}) {
      this.x = props.x;

      this.y = props.y || 0;

      this.t1 = props.t1;
      this.t2 = props.t2;
      this.t3 = props.t3;
      this.t4 = props.t4;
      this.t5 = props.t5;
      this.t6 = props.t6;
      this.t7 = props.t7;
      this.t8 = props.t8;
      this.t9 = props.t9;
    }

    this.id = Guid.create().toString();
  }

  public x: number = 0;

  public fontSize: number = 12;
  public borderRadius: number = 5;

  public id: string;
  public y: number = 0;

  public font: string = "Verdana";

  public t1: string = "";
  public t2: string = "";
  public t3: string = "";
  public t4: string = "";
  public t5: string = "";
  public t6: string = "";
  public t7: string = "";
  public t8: string = "";
  public t9: string = "";

  public backgroundHex: string = "";
  public legendHex: string = "";
}
// export class Key extends Vue {
//   public text: string;
//   public meta: object;

//   constructor(text = "", meta = {}, x = 0, y = 0) {
//     super();
//     this.text = text;
//     this.meta = meta;
//     this.x = x;
//     this.y = y;
//   }

//   public fontSize: number = 12;
//   public borderRadius: number = 5;

//   public x: number = 0;
//   public y: number = 0;

//   public font: string = "Verdana";

//   public t1: string = "";
//   public t2: string = "";
//   public t3: string = "";
//   public t4: string = "";
//   public t5: string = "";
//   public t6: string = "";
//   public t7: string = "";
//   public t8: string = "";
//   public t9: string = "";

//   public backgroundColor: string = "#cccccc";
//   public legendColor: string = "black";
// }
