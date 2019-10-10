<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div class="go-message" @click="goPage">跳转消息页面</div>
  </div>
</template>
<script>
import pubSub from '@/utils/pubSub';

export default {
  data() {
    return {};
  },
  mounted() {
    pubSub.subscribe('about', message => {
      window.alert('获取了页面间通讯的消息---' + message);
    });
  },
  created() {},
  methods: {
    goPage() {
      this.$forward('message');
    },
  },
};
</script>
