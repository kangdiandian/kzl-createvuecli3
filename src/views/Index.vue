<template>
  <div class="page-index" @click="goHome()">
    <div id="scroll_div" class="fl">
      <div id="scroll_begin">
        恭喜793765***获得
        <span class="pad_right">50元巨人点卡奖励</span> 恭喜793765***获得
        <span class="pad_right">50元巨人点卡奖励</span> 恭喜793765***获得
        <span class="pad_right">50元巨人点卡奖励</span>
      </div>
      <div id="scroll_end">
        恭喜793765***获得
        <span class="pad_right">50元巨人点卡奖励</span> 恭喜793765***获得
        <span class="pad_right">50元巨人点卡奖励</span> 恭喜793765***获得
        <span class="pad_right">50元巨人点卡奖励</span> 恭喜793765***获得
        <span class="pad_right">50元巨人点卡奖励</span> 恭喜793765***获得
        <span class="pad_right">50元巨人点卡奖励</span> 恭喜793765***获得
        <span class="pad_right">50元巨人点卡奖励</span> 恭喜793765***获得
        <span class="pad_right">50元巨人点卡奖励</span>
      </div>
    </div>
  </div>
</template>
<script>
import api from '@/api';
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      intervalId: '',
      scrollBegin: '',
      scrollEnd: '',
      scrollDiv: '',
    };
  },
  computed: {},
  created() {
    // this.ScrollImgLeft();
    // this.goHome();
    // this.queryString();
    // assign方法加载新的文档
    // window.location.assign('home');
    // window.location.reload();
    // replace方法用新的文档替换当前文档，不会在浏览器历史记录中生成一条新纪录
    // window.location.replace('home');
    // console.log(window.navigator.userAgent);
    // window.history.go('home');
  },
  mounted() {},
  methods: {
    ...mapActions(['setPageTitle']),
    goHome() {
      this.setPageTitle('首页1');
      api.getConfig(
        {},
        res => {
          console.log(res);
        },
        err => {}
      );
      // this.$forward('home');
    },
    ScrollImgLeft() {
      const that = this;
      var speed = 50;
      this.$nextTick(() => {
        this.scrollBegin = this.$el.querySelector('#scroll_begin');
        this.scrollEnd = this.$el.querySelector('#scroll_end');
        this.scrollDiv = this.$el.querySelector('#scroll_div');
        this.scrollEnd.innerHTML = this.scrollBegin.innerHTML;
        const Marquee = () => {
          if (that.scrollEnd.offsetWidth - that.scrollDiv.scrollLeft <= 0) {
            that.scrollDiv.scrollLeft -= that.scrollEnd.offsetWidth;
          } else {
            that.scrollDiv.scrollLeft++;
          }
          console.log(that.scrollDiv.scrollLeft);
        };
        speed = parseInt((15 * 1000) / this.scrollEnd.offsetWidth);
        this.intervalId = setInterval(Marquee, speed);
      });
      // var scroll_begin = document.getElementById("scroll_begin");
      // var scroll_end = document.getElementById("scroll_end");
      // var scroll_div = document.getElementById("scroll_div");
      // this.scrollDiv.onmouseover = function() {
      //   clearInterval(MyMar);
      // };
      // this.scrollDiv.onmouseout = function() {
      //   MyMar = setInterval(Marquee, speed);
      // };
    },
    // 解析location中search属性
    queryString() {
      const { search = '' } = window.location;
      const qs = search.length > 0 ? search.substring(1) : '';
      const arr1 = qs.split('&');
      let args = {};
      for (let i = 0; i < arr1.length; i++) {
        const arr2 = arr1[i].split('=');
        args[decodeURIComponent(arr2[0])] = decodeURIComponent(arr2[1]);
      }
      return args;
    },
  },
};
</script>
<style lang="stylus" scoped>
.page-index {
  width: 300px;
  height: 300px;
  background: red;
}
.pad_right{ padding-right:2em;}
#scroll_div {height:26px;overflow: hidden;white-space: nowrap;width:500px;margin-left:10px;}
#scroll_begin,#scroll_end {display: inline;}
</style>
