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
      <div class="col-md-4 ml-auto">
        what
      </div>
    </div>
    <div class="row p-3">
      <svg
        width="188"
        height="138"
        viewBox="0.000 0.000 188 138"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        v-html="svg"
      ></svg>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
const source = `
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
const source2 = `

      <style type='text/css'>
    .keycap .border { stroke: black; stroke-width: 2; }
    .keycap .inner.border { stroke: rgba(0,0,0,.1); }
      </style>
      <defs>
            <linearGradient id="DCS">
                  <stop offset="0%" stop-color="black" stop-opacity="0"/>
                  <stop offset="40%" stop-color="black" stop-opacity="0.1"/>
                  <stop offset="60%" stop-color="black" stop-opacity="0.1"/>
                  <stop offset="100%" stop-color="black" stop-opacity="0"/>
            </linearGradient>
            <linearGradient id="SPACE" x1="0%" x2="0%" y1="0%" y2="100%">
                  <stop offset="0%" stop-color="black" stop-opacity="0.1"/>
                  <stop offset="20%" stop-color="black" stop-opacity="0.0"/>
                  <stop offset="40%" stop-color="black" stop-opacity="0.0"/>
                  <stop offset="100%" stop-color="black" stop-opacity="0.1"/>
            </linearGradient>
            <radialGradient id="DSA">
                  <stop offset="0%" stop-color="black" stop-opacity="0.1"/>
                  <stop offset="10%" stop-color="black" stop-opacity="0.1"/>
                  <stop offset="100%" stop-color="black" stop-opacity="0"/>
            </radialGradient>
            <radialGradient id="SA" xlink:href="#DSA" />
      </defs>

      <g transform='translate(10,10)'>
            <g transform='translate(5,5)'>
                  <g class='keycap'>

                        <!-- Outer Border -->
                        <rect x="1" y="1" width="52" height="52" rx="5" fill="#cccccc" class="outer border"/>
                        <!-- Outer Fill -->
                        <rect x="1" y="1" width="52" height="52" rx="5" fill="#cccccc"/>
                        <!-- Inner Border -->
                        <rect x="7" y="4" width="40" height="40" rx="5" fill="#fcfcfc" class="inner border"/>
                        <!-- Inner Fill -->
                        <rect x="7" y="4" width="40" height="40" rx="5" fill="#fcfcfc"/>

                        <text x="10" y="18" font-family="Verdana" font-size="12" fill="black">1</text>
                        <text x="10" y="28" font-family="Verdana" font-size="12" fill="black">2</text>
                        <text x="10" y="38" font-family="Verdana" font-size="12" fill="black">3</text>
                        <text x="23" y="18" font-family="Verdana" font-size="12" fill="black">4</text>
                        <text x="23" y="28" font-family="Verdana" font-size="12" fill="black">5</text>
                        <text x="23" y="38" font-family="Verdana" font-size="12" fill="black">6</text>
                        <text x="36" y="18" font-family="Verdana" font-size="12" fill="black">7</text>
                        <text x="36" y="28" font-family="Verdana" font-size="12" fill="black">8</text>
                        <text x="36" y="38" font-family="Verdana" font-size="12" fill="black">9</text>
                  </g>

                  <g class='keycap'>
                        <!-- Outer Border -->
                        <rect x="55" y="1" width="52" height="52" rx="5" fill="#cccccc" class="outer border"/>
                        <!-- Outer Fill -->
                        <rect x="55" y="1" width="52" height="52" rx="5" fill="#cccccc"/>
                        <!-- Inner Border -->
                        <rect x="61" y="4" width="40" height="40" rx="5" fill="#fcfcfc" class="inner border"/>
                        <!-- Inner Fill -->
                        <rect x="61" y="4" width="40" height="40" rx="5" fill="#fcfcfc"/>
                  </g>

                  <g class='keycap'>
                        <!-- Outer Border -->
                        <rect x="110" y="1" width="52" height="52" rx="5" fill="#cccccc" class="outer border"/>
                        <!-- Outer Fill -->
                        <rect x="110" y="1" width="52" height="52" rx="5" fill="#cccccc"/>
                        <!-- Inner Border -->
                        <rect x="116" y="4" width="40" height="40" rx="5" fill="#fcfcfc" class="inner border"/>
                        <!-- Inner Fill -->
                        <rect x="116" y="4" width="40" height="40" rx="5" fill="#fcfcfc"/>
                  </g>

                  <g class='keycap'>

                        <!-- Outer Border -->
                        <rect x="1" y="55" width="52" height="52" rx="5" fill="#cccccc" class="outer border"/>
                        <!-- Outer Fill -->
                        <rect x="1" y="55" width="52" height="52" rx="5" fill="#cccccc"/>
                        <!-- Inner Border -->
                        <rect x="7" y="58" width="40" height="40" rx="5" fill="#fcfcfc" class="inner border"/>
                        <!-- Inner Fill -->
                        <rect x="7" y="58" width="40" height="40" rx="5" fill="#fcfcfc"/>
                  </g>

                  <g class='keycap'>

                        <!-- Outer Border -->
                        <rect x="55" y="55" width="52" height="52" rx="5" fill="#000000" class="outer border"/>
                        <!-- Outer Fill -->
                        <rect x="55" y="55" width="52" height="52" rx="5" fill="#000000"/>
                        <!-- Inner Border -->
                        <rect x="61" y="58" width="40" height="40" rx="5" fill="#080808" class="inner border"/>
                        <!-- Inner Fill -->
                        <rect x="61" y="58" width="40" height="40" rx="5" fill="#080808"/>
                  </g>

            </g>
      </g>
`;
@Component({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {
  public svg: string = source2;
}
</script>
