<template>
  <div class="cal-container">
    <div class="header">
      <div id="dateSelect" @click="calShow = true">{{ date }}</div>
      <div class="caption">点击选择日期</div>
    </div>
    <van-calendar v-model="calShow" @confirm="selectDate"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Calendar } from 'vant'; 

export default Vue.extend({
  components: {
    [Calendar.name]: Calendar
  },
  data() {
    return {
      calShow: false,
      date: '2020-1-14'
    };
  },
  methods: {
    formatDate(date: Date) {
      return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    },
    selectDate(date: Date) {
      this.calShow = false;
      this.date = this.formatDate(date);
    }
  }
});
</script>

<style lang="less" scoped>
.header {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100px;
}
#dateSelect {
  font-size: 18px;
}
.caption {
  margin-top: 10px;
  color: rgba(69, 90, 100, 0.6);
}
</style>
