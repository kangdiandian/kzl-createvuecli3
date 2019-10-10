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
  props: {
    pullLoading: Boolean,
    finished: Boolean,
    offset: {
      type: Number,
      default: () => {
        return 300;
      },
    },
    // immediateCheck:
  },
  mounted() {
    this.scroller = scroll.getScrollEventTarget(this.$el);
    this.handler(true);
  },
  destroyed() {
    this.handler(false);
  },
  activated() {
    this.handler(true);
  },
  deactivated() {
    this.handler(false);
  },
  methods: {
    onScroll() {
      const el = this.$el;
      const { scroller, offset } = this;
      const visibleHeight = scroll.getVisibleHeight(this.scroller);
      if (!visibleHeight) {
        return;
      }
      const scrollTop = scroll.getScrollTop(scroller);
      const targetBottom = scrollTop + visibleHeight;

      let reachBottom = false;

      if (el === scroller) {
        reachBottom = scroller.scrollHeight - targetBottom < offset;
      } else {
        const elBottom =
          scroll.getElementTop(el) -
          scroll.getElementTop(scroller) +
          scroll.getVisibleHeight(el);
        reachBottom = elBottom - visibleHeight < offset;
      }

      if (reachBottom) {
        this.$emit('onScrollToLower');
      }
    },
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
.vue-pull-scroll {
  // padding-top: 44px;
  height: 100%;
  height: 100vh;
  overflow-y: scroll;
  // overflow-x: hidden;
}
</style>
