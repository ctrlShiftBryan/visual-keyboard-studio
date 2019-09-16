<template>
  <div class="container-fluid">
    <v-style
      >.bg-dark { background-color: {{ backgroundColor }}!important; }</v-style
    >
    <div class="row">
      <div class="col-sm">One of three columns</div>
      <div class="col-sm">
        <div class="row">
          <div class="col-8 col-sm-6">
            <!-- <ColorPicker id="background-color" name="Background Color" />
            <ColorPicker id="alpa-color" name="Alpha Color" /> -->
          </div>
          <div class="col-4 col-sm-6">more</div>
        </div>

        <div class="row">
          <div class="col-8 col-sm-6"></div>
          <div class="col-4 col-sm-6"></div>
        </div>
      </div>
      <div class="col-sm">One of three columns</div>
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
import 'vue-octicon/icons/repo';
import { Component, Vue } from 'vue-property-decorator';
import { Key } from '@/models/types/Key';
// import ColorPicker from '@/components/ColorPick.vue';
import KeyCap from '@/components/KeyCap.vue';
import Octicon from 'vue-octicon/components/Octicon.vue';
@Component({
  components: {
    KeyCap,
    Octicon
    // ColorPicker
  }
})
export default class Home extends Vue {
  backgroundColor: string = '#0B1079';
  backgroundPickerVisible: boolean = false;
  get keys() {
    return [
      new Key({ x: 0, t7: 'q', backgroundHex: this.backgroundColor }),
      new Key({ x: 1, t7: 'w', backgroundHex: this.backgroundColor }),
      new Key({ x: 2, t7: 'e', backgroundHex: this.backgroundColor }),
      new Key({ x: 3, t7: 'r', backgroundHex: this.backgroundColor }),
      new Key({ x: 4, t7: 't', backgroundHex: this.backgroundColor }),
      new Key({ x: 5, t7: 'y', backgroundHex: this.backgroundColor }),
      new Key({ x: 6, t7: 'u', backgroundHex: this.backgroundColor }),
      new Key({ x: 7, t7: 'i', backgroundHex: this.backgroundColor }),
      new Key({ x: 8, t7: 'o', backgroundHex: this.backgroundColor }),
      new Key({ x: 9, t7: 'p', backgroundHex: this.backgroundColor }),
      new Key({ x: 10, t7: '{', backgroundHex: this.backgroundColor }),
      new Key({ x: 11, t7: '}', backgroundHex: this.backgroundColor }),
      new Key({ x: 12, t7: '\\', backgroundHex: this.backgroundColor }),
      new Key({
        x: 0,
        y: 1,
        t7: 'a',
        width: 2,
        backgroundHex: this.backgroundColor
      }),
      new Key({
        x: 2,
        y: 1,
        t7: 's',
        width: 1,
        backgroundHex: this.backgroundColor
      }),
      new Key({
        x: 3,
        y: 1,
        t7: 'd',
        height: 2,
        backgroundHex: this.backgroundColor
      }),
      new Key({
        x: 0,
        y: 2,
        t7: 'z',
        height: 1,
        backgroundHex: this.backgroundColor
      })
    ];
  }

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
