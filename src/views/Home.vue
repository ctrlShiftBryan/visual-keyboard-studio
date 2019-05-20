<template>
  <div class="container-fluid">
    <div class="row p-3">
      <div class="col-md-auto">
        <div
          class="btn-toolbar mb-3"
          role="toolbar"
          aria-label="Toolbar with button groups"
        >
          <div class="btn-group mr-2" role="group" aria-label="First group">
            <button type="button" class="btn btn-secondary">1</button>
          </div>
          <div class="btn-group mr-2" role="group" aria-label="First group">
            <button type="button" class="btn btn-secondary">2</button>
          </div>

          <div class="input-group mr-2">
            <div class="input-group-prepend">
              <div class="input-group-text" id="btnGroupAddon">x</div>
            </div>
            <input
              type="text"
              class="form-control"
              placeholder="Input group example"
              aria-label="Input group example"
              aria-describedby="btnGroupAddon"
            />
          </div>
          <div class="input-group">
            <div class="input-group-prepend">
              <div class="input-group-text" id="btnGroupAddony">y</div>
            </div>
            <input
              type="text"
              class="form-control"
              placeholder="Input group example"
              aria-label="Input group example"
              aria-describedby="btnGroupAddon"
            />
          </div>
        </div>
      </div>
      <div class="col-md-4 ml-auto">what</div>
    </div>
    <div class="row p-3">
      <svg
        :width="maxWidth"
        :height="maxHeight"
        :viewBox="`0.000 0.000 ${maxWidth} ${maxHeight}`"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <g transform="translate(10,10)">
          <g transform="translate(5,5)">
            <KeyCap v-for="k in keys" :key="k.id" :model-key="k"></KeyCap>
          </g>
        </g>
      </svg>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import KeyCap from "@/components/KeyCap.vue";
import { Key } from "@/models/Key";
@Component({
  components: {
    HelloWorld,
    KeyCap
  }
})
export default class Home extends Vue {
  keys: Key[] = [
    new Key({ x: 0, t7: "q" }),
    new Key({ x: 1, t7: "w" }),
    new Key({ x: 2, t7: "e" }),
    new Key({ x: 3, t7: "r" }),
    new Key({ x: 4, t7: "t" }),
    new Key({ x: 5, t7: "y" }),
    new Key({ x: 6, t7: "u" }),
    new Key({ x: 7, t7: "i" }),
    new Key({ x: 8, t7: "o" }),
    new Key({ x: 9, t7: "p" }),
    new Key({ x: 10, t7: "{" }),
    new Key({ x: 11, t7: "}" }),
    new Key({ x: 12, t7: "\\" }),
    new Key({ x: 0, y: 1, t7: "a", width: 2 }),
    new Key({ x: 2, y: 1, t7: "s", width: 1 }),
    new Key({ x: 3, y: 1, t7: "d", height: 2 }),
    new Key({ x: 0, y: 2, t7: "z", height: 1 })
  ];

  get maxHeight() {
    const maxKey = this.keys.reduce((prev, current) =>
      prev.y + prev.height > current.y + current.height ? prev : current
    );
    return (maxKey.y + maxKey.height) * 56 + 16;
  }

  get maxWidth() {
    const maxKey = this.keys.reduce((prev, current) =>
      prev.x + prev.width > current.x + current.width ? prev : current
    );
    return (maxKey.x + maxKey.width) * 56 + 16;
  }
}
</script>
