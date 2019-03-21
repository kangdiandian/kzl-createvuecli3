<template>
  <div id="app">
    <Layout></Layout>
  </div>
</template>
<script>
import Layout from '@/layout/Layout';
export default {
  name: 'app',
  components: {
    Layout,
  },
};
</script>

<style lang="stylus">
@import './style/index';
.layout-base,
.router-container {
  position: absolute 0 0 0 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 1;
}

#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50

#nav
  padding 30px
  a
    font-weight bold
    color #2c3e50
    &.router-link-exact-active
      color #42b983
</style>
