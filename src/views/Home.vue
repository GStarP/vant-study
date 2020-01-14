<template>
  <div id="mainContainer">
    <div class="header">模拟手机</div>
    <div class="caption">选择组件</div>
    <van-grid id="naviContainer" :column-num="2">
      <van-grid-item
        class="navi-item"
        v-for="(item, i) of naviList"
        :key="i"
        :text="item.name"
        :to="'/show/' + item.path + '?cur=' + item.name"
      />
    </van-grid>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Grid, GridItem } from 'vant';

export default Vue.extend({
  name: 'home',
  components: {
    [Grid.name]: Grid,
    [GridItem.name]: GridItem
  },
  data() {
    return {
      naviList: [
        {
          path: 'swipe-cell',
          name: '滑动单元格'
        },
        {
          path: '',
          name: 'TODO'
        }
      ]
    }
  }
});
</script>

<style lang="less" scoped>
#mainContainer {
  width: 100%;
  min-height: 100%;
}
.header {
  width: 100%;
  height: 64px;
  line-height: 64px;
  background-color: white;
  text-align: center;
  font-size: 16px;
  color: #444;
}
.caption {
  width: fit-content;
  height: 64px;
  margin-left: 20px;
  line-height: 64px;
  text-align: center;
  font-size: 16px;
  color: rgba(69, 90, 100, 0.6);
}
#naviContainer {
  width: 100%;
  .navi-item {
    height: 80px;
  }
}
</style>
