<template>
  <div class="article">
    <Scroll>
      <WaterFall ref="waterFall"></WaterFall>
    </Scroll>
  </div>
</template>
<script>
import api from '@/api';
import WaterFall from '@/components/WaterFall';
import Scroll from '@/ui/Scroll';

export default {
  components: {
    WaterFall,
    Scroll,
  },
  data() {
    return {};
  },
  mounted() {},
  created() {
    this.getList();
  },
  methods: {
    getList() {
      api.articleList(
        {
          zone_id: 21,
        },
        res => {
          const {
            data: { list = [] },
          } = res;
          this.$refs.waterFall.setData(list, 'push');
        },
        err => {}
      );
    },
  },
};
</script>
<style lang="stylus" scoped></style>
