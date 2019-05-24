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
            <div>
              <label class="control-label">Background</label>
              <div class="input-group">
                <div class="input-group-prepend">
                  <span id="basic-addon1" class="input-group-text">
                    <input type="radio" name="group" />
                  </span>
                </div>
                <input
                  id="addressLine1"
                  v-model="backgroundColor"
                  name="addressLine1"
                  placeholder="#000000"
                  class="form-control"
                  required="true"
                  type="text"
                  @focus="backgroundPickerVisible = true"
                />

                <div
                  v-if="backgroundPickerVisible"
                  v-on-clickaway="away"
                  class="backgroundSketchHolder"
                >
                  <sketch
                    :value="backgroundColor"
                    @input="
                      x => {
                        updateColor('primary', x);
                      }
                    "
                  />
                </div>
              </div>
            </div>
            <label class="control-label">Alpha</label>
            <div class="input-group">
              <div class="input-group-prepend">
                <span id="basic-addon1" class="input-group-text">
                  <input type="radio" name="group" />
                </span>
              </div>
              <input
                id="addressLine1"
                name="addressLine1"
                placeholder="#FFFFFF"
                class="form-control"
                required="true"
                value
                type="text"
              />
            </div>
          </div>
          <div class="col-4 col-sm-6"></div>
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
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import KeyCap from '@/components/KeyCap.vue';
import { Key } from '@/models/Key';
import Octicon from 'vue-octicon/components/Octicon.vue';
import 'vue-octicon/icons/repo';
import { Sketch } from 'vue-color';
import { mixin as clickaway } from 'vue-clickaway';

@Component({
  components: {
    Sketch,
    HelloWorld,
    KeyCap,
    Octicon
  },
  mixins: [clickaway]
})
export default class Home extends Vue {
  backgroundColor: string = '#425A37';
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

  updateColor(target: string, color: any) {
    if (target === 'primary') {
      this.backgroundColor = color.hex;
    }
  }

  handleBlur(e: any) {
    console.log(e);
  }

  away(x: MouseEvent) {
    const srcElement = x.srcElement as Element;
    if (srcElement && srcElement.id === 'addressLine1') {
      this.backgroundPickerVisible = true;
    } else {
      this.backgroundPickerVisible = false;
    }
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
<style lang="scss" scoped>
.backgroundSketchHolder {
  position: absolute;
  z-index: 1;
  margin-top: 38px;
}
</style>
