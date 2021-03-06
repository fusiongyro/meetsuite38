import Vue from 'vue'
import App from './App'
import Hello from './components/Hello.vue'
import Home from './components/Home.vue'
import Reservation from './components/Reservation.vue'
import './assets/app.less'
import vPikaday from 'vue-pikaday'
import VueRouter from 'vue-router'

Vue.use(VueRouter);
Vue.use(vPikaday);

var router = new VueRouter();

router.map({
  '/': {
    component: Home
  },
  '/hello': {
    component: Hello
  },
  '/reservation': {
    component: Reservation
  }
});

router.start(App, 'body');
