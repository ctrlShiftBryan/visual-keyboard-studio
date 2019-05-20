<template>
  <g class="keycap" @click="handleClick">
    <!-- Outer Border -->
    <rect
      :x="model.x"
      :y="model.y"
      :width="model.calc_width"
      :height="model.calc_height"
      rx="5"
      fill="#cccccc"
      class="outer border"
    />
    <!-- Outer Fill -->
    <rect
      :x="model.x"
      :y="model.y"
      :width="model.calc_width"
      :height="model.calc_height"
      rx="5"
      fill="#cccccc"
    />
    <!-- Inner Border -->
    <rect
      :x="model.x_inner"
      :y="model.y_inner"
      :width="model.inner_width"
      :height="model.inner_height"
      rx="5"
      fill="#fcfcfc"
      class="inner border"
    />
    <!-- Inner Fill -->
    <rect
      :x="model.x_inner"
      :y="model.y_inner"
      :width="model.inner_width"
      :height="model.inner_height"
      fill="#fcfcfc"
    />

    <text
      :x="model.x_left_text"
      :y="model.y_left_text"
      font-family="Verdana"
      font-size="12"
      fill="black"
      >{{ model.t7 }}</text
    >
    <text
      :x="model.x_middle_text"
      :y="model.y_left_text"
      font-family="Verdana"
      font-size="12"
      fill="black"
      >{{ model.t8 }}</text
    >
    <text
      :x="model.x_right_text"
      :y="model.y_left_text"
      font-family="Verdana"
      font-size="12"
      fill="black"
      >{{ model.t9 }}</text
    >

    <text
      :x="model.x_left_text"
      :y="model.y_middle_text"
      font-family="Verdana"
      font-size="12"
      fill="black"
      >{{ model.t4 }}</text
    >
    <text
      :x="model.x_middle_text"
      :y="model.y_middle_text"
      font-family="Verdana"
      font-size="12"
      fill="black"
      >{{ model.t5 }}</text
    >
    <text
      :x="model.x_right_text"
      :y="model.y_middle_text"
      font-family="Verdana"
      font-size="12"
      fill="black"
      >{{ model.t6 }}</text
    >

    <text
      :x="model.x_left_text"
      :y="model.y_right_text"
      font-family="Verdana"
      font-size="12"
      fill="black"
      >{{ model.t1 }}</text
    >
    <text
      :x="model.x_middle_text"
      :y="model.y_right_text"
      font-family="Verdana"
      font-size="12"
      fill="black"
      >{{ model.t2 }}</text
    >
    <text
      :x="model.x_right_text"
      :y="model.y_right_text"
      font-family="Verdana"
      font-size="12"
      fill="black"
      >{{ model.t3 }}</text
    >
  </g>
</template>
<script lang="ts">
import { Key } from "../models/Key";
import { Component, Mixins, Vue, Prop } from "vue-property-decorator";

@Component
export default class KeyCap extends Vue {
  @Prop({ required: true })
  public modelKey!: Key;
  handleClick() {
    console.log(this.model);
  }
  get model() {
    const width = 54 * this.modelKey.width + this.modelKey.width;
    const height = 54 * this.modelKey.height + 1;

    const base_x = this.modelKey.x * 56;
    const base_y = this.modelKey.y * 56;

    const x_pad = 6;
    const y_pad = 4;

    const x_text_pad = (width - 12) / 3;
    const y_text_pad = (height - 12) / 3;

    const text_x_pad = x_text_pad - x_pad;
    const text_y_pad = y_text_pad;

    return {
      ...this.modelKey,
      calc_width: width,
      calc_height: height,

      inner_width: width - 12,
      inner_height: height - 12,

      x: base_x,
      y: base_y,
      x_inner: base_x + x_pad,

      y_inner: base_y + y_pad,

      x_left_text: base_x + text_x_pad,
      x_middle_text: base_x + text_x_pad + x_text_pad,
      x_right_text: base_x + text_x_pad + x_text_pad + x_text_pad,

      y_left_text: base_y + text_y_pad,
      y_middle_text: base_y + text_y_pad + y_text_pad,
      y_right_text: base_y + text_y_pad + y_text_pad + y_text_pad
    };
  }
}
</script>

<style type="text/css">
.keycap .border {
  stroke: black;
  stroke-width: 2;
}
.keycap .inner.border {
  stroke: rgba(0, 0, 0, 0.1);
}
</style>
