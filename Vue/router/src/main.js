import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {

  console.log('beforeEach');
  next();
});

new Vue({
  router,
  render: function (h) {
    return h(App)
  }
}).$mount('#app');
