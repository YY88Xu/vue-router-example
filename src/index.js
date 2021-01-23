import Vue from 'vue';
import router from './route/router';
import store from './store/index'


let app = new Vue({
  el: '.app',
  router,
  store
})
