import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './components/Home.vue'
import Browse from './components/Browse.vue'
import Login from './components/Login.vue'

Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(Vuex);

const routes = [
    {path: '/', component: Home, name: 'homePage'},
    {path: '/browse', component: Browse, name: 'browsePage'},
    {path: '/login', component: Login, name: 'loginPage'}
];

const router = new VueRouter({routes});

const store = new Vuex.Store({
    state: {
        posts: [],
        profiles: [],
        authors: [],
        user: {
          firstname: "",
          lastname: "",
          email: "",
          avatar: ""
        }
    },
    actions: {
        getPosts({ commit }) {
            axios.get('https://private-anon-2946c586f1-wad20postit.apiary-mock.com/posts')
                .then(response => {
                    commit('setPostsAndAuthors', response.data)
                })
        },
        getProfiles({ commit }) {
            axios.get('https://private-anon-3cade46633-wad20postit.apiary-mock.com/profiles')
                .then(response => {
                    commit('setProfiles', response.data);
                });
        },
        getUserInfo({ commit }) {
            axios.get('https://private-anon-2946c586f1-wad20postit.apiary-mock.com/users/1')
                .then(response => {
                    commit('setUser', response.data);
                });
        }
    },
    mutations: {
        setPostsAndAuthors: (state, posts) => {
            for (let post of posts) {
              post.liked = false;
            }
            state.posts = posts;
            let authors = [];
            for (const post of posts) {
                authors.push(post.author);
            }
            state.authors = authors;
        },
        setProfiles: (state, profiles) => {
            for (let profile of profiles) {
              profile.following = false;
            }
            state.profiles = profiles;
        },
        setUser: (state, user) => {
          state.user.firstname = user.firstname;
          state.user.lastname = user.lastname;
          state.user.email = user.email;
          state.user.avatar = user.avatar;
        }
    },
    getters: {
        getUserInfo: (state) => {
          return state.user;
        },
        getPosts: (state) => {
          return state.posts;
        },
        getProfiles: (state) => {
          return state.profiles;
        },
        getAuthors: (state) => {
          return state.authors;
        }
    }
});

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');
