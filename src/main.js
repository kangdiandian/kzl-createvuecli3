import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import mini from '@/utils/mini';
import './plugins/element.js';

Vue.config.productionTip = false;

Object.keys(mini).forEach(key => {
  Vue.prototype[`$${key}`] = mini[key];
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
