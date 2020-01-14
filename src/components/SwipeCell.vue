<template>
  <div class="ac-list-container">
    <van-swipe-cell
      v-for="ac of acList"
      v-bind:key="ac.id"
    >
      <van-cell :border="false" :title="ac.name" :label="ac.time" size="large">
        <van-button class="edit-text">修改</van-button>
      </van-cell>
      <template slot="right">
        <van-button square type="danger" text="删除" @click="confirmDel"/>
      </template>
    </van-swipe-cell>
  </div>
</template>

<script>
import Vue from 'vue';
import { Dialog, Cell, SwipeCell, Button } from 'vant';

export default Vue.extend({
  name: 'swipe-cell',
  components: {
    [Dialog.Component.name]: Dialog.Component,
    [Cell.name]: Cell,
    [SwipeCell.name]: SwipeCell,
    [Button.name]: Button
  },
  data() {
    return {
      acList: [
        {
          id: 1,
          name: '七彩寒假',
          time: '2020-1-8 00:00',
          state: '可签到'
        },
        {
          id: 2,
          name: '九彩暑假',
          time: '2020-6-5 00:00',
          state: '可请假'
        }
      ]
    }
  },
  methods: {
    confirmDel() {
      Dialog.confirm({
        message: '是否确认删除？'
      }).then(() => {
        alert('删除成功！');
      }).catch(() => {
        //
      });
    }
  }
});
</script>

<style lang="less" scoped>

</style>
