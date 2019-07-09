import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,

    },
    {
      path: '/one',
      name: 'one',
      component: function () {
        return import(/* webpackChunkName: "about" */ './views/One.vue')
      }
    },
    {
      path: '/two',
      name: 'two',
      component: function () {
        return import(/* webpackChunkName: "about" */ './views/Two.vue')
      }
    },
    {
      path: '/three',
      name: 'three',
      component: function () {
        return import(/* webpackChunkName: "about" */ './views/Three.vue')
      }
    },
  ]
})
