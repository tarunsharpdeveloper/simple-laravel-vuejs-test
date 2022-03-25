import '@babel/polyfill';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import mixins from './mixins';
import jQuery from 'jquery';
import VueAWN from 'vue-awesome-notifications';
import VueMask from 'v-mask';
// import '@/assets/css/front.css';
// import '@/assets/css/custom.css';
import '@/assets/css/stylesheet.css';

import 'vue-awesome-notifications/dist/styles/style.css';



Vue.config.productionTip = false;
Vue.config.silent = false;
Vue.config.debug = false;
window.$ = jQuery;
Vue.use(VueAWN, { position: 'top-right' });
Vue.use(VueMask);


const app = new Vue({
  router,
  store,
  mixins,
  render: h => h(App)
}).$mount('#app');

if (window.Cypress) {
  window.app = app;
}
