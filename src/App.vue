<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'app'
});
</script>

<style lang="less">
html {
  width: 100%;
  height: 100%;
}
body {
  margin: 0;
  width: 100%;
  height: 100%;
}
#app {
  width: 100%;
  min-height: 100%;
  background-color: #f7f8fa;
}
</style>
