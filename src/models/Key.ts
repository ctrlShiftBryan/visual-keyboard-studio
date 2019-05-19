import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export class Key extends Vue {
  @Prop({ default: 12 })
  public fontSize!: number;

  @Prop({ default: 5 })
  public borderRadius!: number;

  @Prop({ default: 0 })
  public x!: number;

  @Prop({ default: 0 })
  public y!: number;

  @Prop({ default: "Verdana" })
  public font!: string;

  @Prop({ default: "" })
  public t1!: string;

  @Prop({ default: "" })
  public t2!: string;

  @Prop({ default: "" })
  public t3!: string;

  @Prop({ default: "" })
  public t4!: string;

  @Prop({ default: "" })
  public t5!: string;

  @Prop({ default: "" })
  public t6!: string;

  @Prop({ default: "" })
  public t7!: string;

  @Prop({ default: "" })
  public t8!: string;

  @Prop({ default: "" })
  public t9!: string;

  @Prop({ default: "" })
  public backgroundHex!: string;

  @Prop({ default: "" })
  public legendHex!: string;
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
