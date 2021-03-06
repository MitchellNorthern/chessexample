/* eslint no-unused-vars: 0 */

import Vue from 'vue';
import App from './App.vue';
import css from './styles/main.css';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
