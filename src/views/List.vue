<template>
  <div class="page-list">
    <div class="list-scroll">
      <div class="list-box">
        <vue-scroll>
          <div class="content" v-for="(item, index) in list" :key="index">
            {{ item.name }}
          </div>
        </vue-scroll>
      </div>
    </div>
  </div>
</template>

<script>
import Scroll from '@/ui/Scroll';
export default {
  components: {
    [Scroll.name]: Scroll,
  },
  data() {
    return {
      list: [
        { name: 'nihao' },
        { name: 'nihao' },
        { name: 'nihao' },
        { name: 'nihao' },
        { name: 'nihao' },
        { name: 'nihao' },
        { name: 'nihao' },
        { name: 'nihao' },
        { name: 'nihao' },
        { name: 'nihao' },
        { name: 'nihao' },
        { name: 'nihao' },
        { name: 'nihao' },
        { name: 'nihao' },
        { name: 'nihao' },
        { name: 'nihao' },
        { name: 'nihao' },
        { name: 'nihao' },
        { name: 'nihao' },
        { name: 'nihao' },
        { name: 'nihao' },
        { name: 'nihao' },
        { name: 'nihao' },
        { name: 'nihao' },
      ],
    };
  },
  mounted() {
    // this.scroller =
  },
};
</script>

<style lang="stylus" scoped>
.page-list {
  position: relative;
  width: 100%;
  height: 100%;
}
.list-scroll{
  position: relative;
  width: 200px;
}
.list-box {
  width: 100%;
}
.content {
  height: 100px;
  border: 2px solid red;
}
</style>
