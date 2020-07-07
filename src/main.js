import Vue from 'vue'
import App from './App.vue'
import vuetify from '../plugins/vuetify';
import VueAnime from 'vue-animejs';
import VueAnimeOnItst from '../plugins/animeOnIntersted'
import router from "./Router"
import "./css/global.css"

Vue.use(VueAnime)
Vue.use(VueAnimeOnItst)

new Vue({
    router,
    vuetify,
    render: h => h(App)
}).$mount('#App')