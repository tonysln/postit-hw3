import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './components/Home.vue'
import Browse from './components/Browse.vue'
import Login from './components/Login.vue'

Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(Vuex);
// TODO use axios

// TODO change <title> of pages?

const routes = [
  {path: '/', component: Home, name: 'homePage'},
  {path: '/browse', component: Browse, name: 'browsePage'},
  {path: '/login', component: Login, name: 'loginPage'}
];

const router = new VueRouter({routes});

const store = new Vuex.Store({
  state: {
    showMenu: false
  },
  mutations: {
    toggleMenu: (state) => {
      state.showMenu = !state.showMenu;
    },
    hideMenu: (state) => {
      state.showMenu = false;
    },
    showMenu: (state) => {
      state.showMenu = true;
    }
  },
  getters: {
    menuVisibilityState: (state) => {
      return state.showMenu;
    }
  }
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
