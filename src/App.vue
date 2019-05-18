<template>
  <div id="app">
    <Nav />
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Nav from "@/components/Nav.vue"; // @ is an alias to /src

@Component({
  components: {
    Nav
  }
})
export default class Home extends Vue {}
</script>
