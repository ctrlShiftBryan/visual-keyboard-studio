<template>
  <g class="keycap">
    <!-- Outer Border -->
    <rect :x="model.x" :y="model.y"  width="52" height="52" rx="5" fill="#cccccc" class="outer border"/>
    <!-- Outer Fill -->
    <rect :x="model.x" :y="model.y" width="52" height="52" rx="5" fill="#cccccc"/>
    <!-- Inner Border -->
    <rect :x="model.x_inner" :y="model.y_inner" width="40" height="40" rx="5" fill="#fcfcfc" class="inner border" />
    <!-- Inner Fill -->
    <rect :x="model.x_inner" :y="model.y_inner" width="40" height="40" rx="5" fill="#fcfcfc"/>

    <text :x="model.x_left_text" :y="model.y_left_text" font-family="Verdana" font-size="12" fill="black">{{model.t7}}</text>

    <text x="23" y="18" font-family="Verdana" font-size="12" fill="black">{{model.t8}}</text>
    <text x="36" y="18" font-family="Verdana" font-size="12" fill="black">{{model.t9}}</text>

    <text :x="model.x_left_text" y="28" font-family="Verdana" font-size="12" fill="black">{{model.t4}}</text>
    <text x="23" y="28" font-family="Verdana" font-size="12" fill="black">{{model.t5}}</text>
    <text x="36" y="28" font-family="Verdana" font-size="12" fill="black">{{model.t6}}</text>

    <text :x="model.x_left_text" y="38" font-family="Verdana" font-size="12" fill="black">{{model.t1}}</text>
    <text x="23" y="38" font-family="Verdana" font-size="12" fill="black">{{model.t2}}</text>
    <text x="36" y="38" font-family="Verdana" font-size="12" fill="black">{{model.t3}}</text>
  </g>
</template>
<script lang="ts">
import { Key } from "../models/Key";
import { Component, Mixins, Vue, Prop } from "vue-property-decorator";

@Component
export default class KeyCap extends Vue {
  @Prop({ required: true })
  public modelKey!: Key;
  get model() {
    const base_x = this.modelKey.x * 55;
    const base_y = this.modelKey.y * 55;

    return {
      ...this.modelKey,
      x: base_x,
      y: base_y,
      x_inner: base_x + 6,

      y_inner: base_y + 4,

      x_left_text: base_x + 10,
      y_left_text: base_y + 18,
    };
  }
}
</script>
<style></style>
