<template>
  <div class="vue-pull-scroll view-scroll">
    <div class="vue-pull-refresh__track">
      <slot />
    </div>
  </div>
</template>

<script>
import scroll from '@/utils/scroll';
import { debounce } from '@/utils';
import { on, off } from '@/utils/event';
export default {
  name: 'vue-scroll',
  mounted() {
    this.scroller = scroll.getScrollEventTarget(this.$el);
  },
  methods: {
    onScroll() {},
    // 添加或移除滚动监听事件
    handler(bind) {
      if (this.bind !== bind) {
        this.bind = bind;
        (bind ? on : off)(
          this.scroller,
          'scroll',
          debounce(this.onScroll, 200)
        );
      }
    },
  },
};
</script>

<style lang="stylus" scoped>
.vue-pull-refresh__track {
  position: relative;
  transition: 0;
  // 这个属性会影响 fixed
  // transform: translate3d(0, 0, 0);
}
</style>
