<template>
  <section class="layout-base">
    <transition>
      <keep-alive>
        <div class="router-container">
          <router-view
            class="router-view page-container"
            id="rootContainer"
          ></router-view>
        </div>
      </keep-alive>
    </transition>
  </section>
</template>
<script>
export default {
  name: 'Layout',
};
</script>
<style lang="stylus" scoped></style>
