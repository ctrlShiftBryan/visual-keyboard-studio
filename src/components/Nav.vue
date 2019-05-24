<template>
  <header>
    <div id="nav" class="navbar navbar-dark bg-dark">
      <router-link class="navbar-brand" to="/">Keeb Studio</router-link>
      <router-link to="/about">About</router-link>
    </div>
  </header>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({ components: {} })
export default class Nav extends Vue {}
</script>
<style lang="scss" scoped></style>
