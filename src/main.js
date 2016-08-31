import Vue from 'vue'
import App from './App'
import './assets/app.less';

/* eslint-disable no-new */
document.vm = new Vue({
  el: 'body',
  components: { App }
});
