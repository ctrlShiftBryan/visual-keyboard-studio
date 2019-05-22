<template>
  <g class="keycap" @click="handleClick">
    <rect
      :x="model.x"
      :y="model.y"
      :width="model.calc_width + 1"
      :height="model.calc_height"
      fill="#191234"
      class="outer border"
    />
    <g id="Layer_8">
      <rect
        :x="model.x2"
        :y="model.y2"
        :width="model.calc_width2"
        :height="model.calc_height2"
        class="st0"
      />
    </g>
    <g id="left">
      <polyline class="st1" :points="model.left_points" />
    </g>
    <g id="bottom">
      <polygon class="st3" :points="model.bottom_points" />
    </g>
    <g id="Layer_9">
      <g>
        <text
          :transform="`matrix(${model.text_transform})`"
          class="st5 st6 st7"
          >{{ model.t7 }}</text
        >
      </g>
    </g>

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
      calc_width2: width - 19,
      calc_height2: height - 15,
      x: base_x,
      y: base_y,
      x2: base_x + 9,
      y2: base_y + 0,

      left_points:
        `${base_x + 10},${base_y} ` +
        `${base_x},${base_y} ` +
        `${base_x},${base_y + height} ` +
        `${base_x + 10},${base_y + height - 15}`,

      bottom_points:
        `${base_x},${base_y + height} ` +
        `${base_x + 10},${base_y + height - 15} ` +
        `${base_x + width - 10},${base_y + height - 15} ` +
        `${base_x + width},${base_y + height}`,

      text_transform: `1 0 0 1 ${base_x + 13} ${base_y + 20}`,

      // x_inner: base_x + x_pad,
      // y_inner: base_y + y_pad,

      // x_left_text: base_x + text_x_pad,
      // x_middle_text: base_x + text_x_pad + x_text_pad,
      // x_right_text: base_x + text_x_pad + x_text_pad + x_text_pad,

      // y_left_text: base_y + text_y_pad,
      // y_middle_text: base_y + text_y_pad + y_text_pad,
      // y_right_text: base_y + text_y_pad + y_text_pad + y_text_pad
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

.st0 {
  fill: #401673;
}
.st1 {
  fill: #350d75;
}
.st2 {
  fill: none;
}
.st3 {
  fill: #2a0f74;
}
.st4 {
  fill: #191234;
}
.st5 {
  fill: #009eb5;
}
.st6 {
  font-family: "Arial";
}
.st7 {
  font-size: 15px;
}
</style>
