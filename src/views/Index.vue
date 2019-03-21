<template>
  <div class="page-index" @click="goHome()">index.vue</div>
</template>
<script>
import api from '@/api';

export default {
  data() {
    return {};
  },
  computed: {},
  created() {},
  methods: {
    goHome() {
      api.getConfig(
        {},
        res => {
          console.log(res);
        },
        err => {}
      );
      // this.$forward('home');
    },
  },
};
</script>
<style lang="stylus" scoped>
.page-index {
  width: 100%;
  height: 100%;
  background: red;
}
</style>
