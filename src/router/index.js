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
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () =>
    //     import(/* webpackChunkName: "about" */ '@/views/About.vue'),
    // },
  ],
});
