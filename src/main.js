import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import mini from '@/utils/mini';
import { sync } from 'vuex-router-sync';
import './plugins/element.js';

Vue.config.productionTip = false;

Object.keys(mini).forEach(key => {
  Vue.prototype[`$${key}`] = mini[key];
});

// 模块动态注册
// https://vuex.vuejs.org/zh/guide/modules.html
// https://github.com/vuejs/vuex-router-sync

sync(store, router);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
