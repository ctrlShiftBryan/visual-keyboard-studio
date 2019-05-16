<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>

    <svg
      width="118.722mm"
      height="55.993mm"
      viewBox="0.000 0.000 118.722 55.993"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      v-html="svg"
    >
    </svg>
    <textarea id="src-area" name="src-area" cols="30" rows="30" v-model="svg"></textarea>
  </div>
</template>

<script lang="ts">
import { Prop, Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
const source = `

      <polygon
        points="113.721,50.993 5.000,50.993 5.000,5.001 113.721,5.001"
        style="fill:none;stroke-width:0.050000mm;stroke:black"
      ></polygon>
      <polygon
        points="90.350,37.521 100.250,47.420 110.149,37.521 100.250,27.621"
        style="fill:none;stroke-width:0.050000mm;stroke:black"
      ></polygon>
      <polygon
        points="26.575,7.526 26.575,21.526 40.575,21.526 40.575,7.526"
        style="fill:none;stroke-width:0.050000mm;stroke:black"
      ></polygon>
`;
@Component({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {
  svg: string = source;
}
</script>
<style lang="scss" scoped>
#src-area {
  width: 80%;
}
</style>
