<template>
  <div class="message-page">
    <div class="send-message" @click="sendMessage">发送消息</div>
  </div>
</template>
<script>
import pubSub from '@/utils/pubSub';
export default {
  data() {
    return {};
  },
  methods: {
    sendMessage() {
      pubSub.publish('about', '传递给about页面的消息！');
    },
  },
};
</script>
<style lang="stylus" scoped>
.message-page {
  position: relative;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
.send-message {
  width: 100px;
  height: 40px;
}
</style>
