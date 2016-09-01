import Vue from 'vue'
import App from './App'
import Hello from './components/Hello.vue'
import './assets/app.less';

import VueRouter from 'vue-router'

Vue.use(VueRouter);

var router = new VueRouter();

router.map({
  '/': {
    component: Hello
  }
});

router.start(App, 'body');
