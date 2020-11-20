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
        showMenu: false,
        posts: [],
        profiles: [],
        authors: [],
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
        }
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
        },
        setPostsAndAuthors: (state, posts) => {
            state.posts = posts;
            let jsonPosts = JSON.parse(posts);
            let authors = [];
            for (const post in jsonPosts) {
                authors.push(post.author);
                console.log(post.author);
            }
            state.authors = authors;
        },
        setProfiles: (state, profiles) => {
            state.profiles = profiles;
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
