import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/views/Index.vue';

console.log(process.env.NODE_ENV);

const lazyLoad =
  process.env.NODE_ENV === 'production'
    ? file => () => import('@/views/' + file + '.vue')
    : file => require('@/views/' + file + '.vue').default;

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      alias: '/index',
      name: 'index',
      meta: { title: '首页' },
      component: Index,
    },
    {
      path: '/about',
      name: 'about',
      component: lazyLoad('About'),
    },
    {
      path: '/home',
      name: 'home',
      component: lazyLoad('Home'),
    },
    {
      path: '/list',
      name: 'list',
      component: lazyLoad('List'),
    },
    {
      path: '/article',
      name: 'article',
      component: lazyLoad('Article'),
    },
    {
      path: '/message',
      name: 'message',
      component: lazyLoad('Message'),
    },
  ],
});
