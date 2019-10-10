<template>
  <div class="water-fall">
    <div class="wf-main" :style="{ height: mainStyle.height }">
      <div
        class="wf-list"
        v-for="(item, index) in list"
        :key="index"
        :style="item.style"
      >
        <div
          class="wf-content"
          v-press="onPress"
          :data-index="index"
          :data-id="item.id"
        >
          <div class="img-box" :style="{ 'padding-bottom': item.ratio }">
            <img class="wf-img" :src="item.pic" />
          </div>
        </div>
        <div class="wf-shade" v-if="item.showShade"></div>
      </div>
    </div>
    <div class="preload">
      <div
        class="preload-list"
        v-for="item in preloadList"
        :key="item.id"
        :style="{ width: listW + 'px' }"
      >
        <div class="img-box" :style="{ 'padding-bottom': item.ratio }">
          <img class="wf-img" :src="item.pic" />
        </div>
      </div>
      <div class="gap"></div>
    </div>
  </div>
</template>
<script>
import { clone } from '@/utils';

export default {
  name: 'water-fall',
  props: {
    initData: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  data() {
    return {
      list: [],
      preloadList: [],
      listW: 0,
      gapW: 0,
      gapH: 0,
      startL: { x: 0, y: 0 },
      startR: { x: 0, y: 0 },
      mainStyle: '',
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.getGapSize('init');
    });
  },
  methods: {
    getGapSize(data = [], type = 'push', index = 0) {
      const gap = this.$el.querySelector('.gap');
      const rect = gap.getBoundingClientRect();
      this.gapW = rect.width;
      this.gapH = rect.height;
      this.listW = (this.gapW - this.gapH) / 2;
      this.startR.x = this.listW + this.gapH;
      if (data === 'init') {
        return;
      }
      this.setData(data, type, index);
    },
    // push 增加 reset 重置
    setData(data, type, index) {
      if (!this.gapH) {
        setTimeout(() => {
          this.getGapSize(data, type, index);
        }, 1);
        return;
      }
      const list = clone(data);
      for (let item of list) {
        item.ratio = (item.height * 100) / item.width + '%';
      }
      this.preloadList = list;
      this.$nextTick(() => {
        const preload = this.$el.querySelectorAll('.preload-list');
        for (let i = 0; i < preload.length; i++) {
          let rect = preload[i].getBoundingClientRect();
          list[i]['vw'] = rect.width;
          list[i]['vh'] = rect.height;
        }
        this.addToList(list, type, index);
        this.preloadList = [];
      });
    },
    addToList(list, type, index) {
      const startL = { ...this.startL };
      const startR = { ...this.startR };
      const gapH = this.gapH;
      if (type == 'reset') {
        startL.y = 0;
        startR.y = 0;
      }
      for (let item of list) {
        let [left, top] = [0, 0];
        if (startL.y < startR.y) {
          left = startL.x;
          top = startL.y;
          startL.y = startL.y + item.vh + gapH;
        } else {
          left = startR.x;
          top = startR.y;
          startR.y = startR.y + item.vh + gapH;
        }
        item.style = {
          left: `${left}px`,
          top: `${top}px`,
        };
      }
      this.startL = startL;
      this.startR = startR;
      this.mainStyle = {
        height: Math.max(startL.y, startR.y) + 'px',
      };
      this.list = list;
    },
    onPress(el) {
      console.log(el);
      const curIndex = el.getAttribute('data-index');
      const article = { ...this.list[curIndex] };
      article.showShade = true;
      this.list.splice(curIndex, 1, article);
    },
  },
};
</script>
<style lang="stylus" scoped>
.water-fall {
  position: relative;
  padding-top: 10px;
  z-index: 1;
  margin: 0 10px;
}
.wf-main {
  position: relative;
  left: 0px;
  top: 0px;
}
.wf-list, .preload-list {
  position: absolute;
  width: 50%;
  overflow: hidden;
  .wf-content {
    position: relative;
    left: 0;
    top: 0;
  }
  .img-box {
    position: relative;
    left: 0;
    top: 0;
  }
  .wf-img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
.wf-shade {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, .8);
}
.preload {
  position: absolute;
  left: -1000px;
  top: -1000px;
  width: 100%;
  visibility: hidden;
}
.gap {
  width: 100%;
  height: 10px;
}
</style>
