<template>
  <div>
    <label class="control-label">{{ name }}</label>
    <div class="input-group">
      <div class="input-group-prepend">
        <span id="basic-addon1" class="input-group-text">
          <input type="radio" name="group" />
        </span>
      </div>
      <input
        :id="`${this.id}-input`"
        v-model="color"
        :name="name"
        placeholder="#000000"
        class="form-control"
        required="true"
        type="text"
        @focus="visible = true"
      />

      <div v-if="visible" v-on-clickaway="away" class="backgroundSketchHolder">
        <sketch
          :value="color"
          @input="
            x => {
              updateColor('primary', x);
            }
          "
        />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Sketch } from 'vue-color';
import ColorPicker from '@/components/ColorPick.vue';
import { mixin as clickaway } from 'vue-clickaway';
@Component({
  props: {
    id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  },
  components: {
    Sketch
  },
  mixins: [clickaway]
})
export default class ColorPick extends Vue {
  color: string = '#425A37';
  visible: boolean = false;
  public id!: string;
  away(x: MouseEvent) {
    const srcElement = x.srcElement as Element;
    if (srcElement && srcElement.id === this.id + '-input') {
      this.visible = true;
    } else {
      this.visible = false;
    }
  }

  updateColor(target: string, color: any) {
    if (target === 'primary') {
      this.color = color.hex;
    }
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
>
