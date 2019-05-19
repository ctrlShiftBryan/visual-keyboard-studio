<template>
  <g class="keycap">
    <!-- Outer Border -->
    <rect :x="points.x" y="1" width="52" height="52" rx="5" fill="#cccccc" class="outer border"/>
    <!-- Outer Fill -->
    <rect :x="points.x" y="1" width="52" height="52" rx="5" fill="#cccccc"/>
    <!-- Inner Border -->
    <rect
      :x="points.x_inner"
      y="4"
      width="40"
      height="40"
      rx="5"
      fill="#fcfcfc"
      class="inner border"
    />
    <!-- Inner Fill -->
    <rect :x="points.x_inner" y="4" width="40" height="40" rx="5" fill="#fcfcfc"/>

    <text :x="points.x_left_text" y="18" font-family="Verdana" font-size="12" fill="black">{{t7}}</text>
    <text x="23" y="18" font-family="Verdana" font-size="12" fill="black">{{t8}}</text>
    <text x="36" y="18" font-family="Verdana" font-size="12" fill="black">{{t9}}</text>

    <text :x="points.x_left_text" y="28" font-family="Verdana" font-size="12" fill="black">{{t4}}</text>
    <text x="23" y="28" font-family="Verdana" font-size="12" fill="black">{{t5}}</text>
    <text x="36" y="28" font-family="Verdana" font-size="12" fill="black">{{t6}}</text>

    <text :x="points.x_left_text" y="38" font-family="Verdana" font-size="12" fill="black">{{t1}}</text>
    <text x="23" y="38" font-family="Verdana" font-size="12" fill="black">{{t2}}</text>
    <text x="36" y="38" font-family="Verdana" font-size="12" fill="black">{{t3}}</text>
  </g>
</template>
<script lang="ts">
import { Key } from "../models/Key";
import { Component, Mixins, Vue, Prop } from "vue-property-decorator";

@Component
export default class KeyCap extends Mixins(Key) {

  get points() {
    const base_x = this.x * 55;
    return {
      x: base_x,
      x_inner: base_x + 6,
      x_left_text: base_x + 10,
    };
  }
}
</script>
<style></style>
