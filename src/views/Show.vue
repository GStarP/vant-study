<template>
  <div id="mainContainer">
    <van-nav-bar
      :title="this.$route.query.cur"
      left-text="返回"
      left-arrow
      @click-left="returnHome"
    />
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { NavBar } from 'vant';

export default Vue.extend({
  name: 'show',
  components: {
    [NavBar.name]: NavBar
  },
  data() {
    return {
      //
    }
  },
  methods: {
    returnHome() {
      this.$router.push({ path: '/home' });
    }
  }
});
</script>

<style lang="less" scoped>
#mainContainer {
  width: 100%;
  min-height: 100%;
}
</style>
