import Vue from 'vue'
import App from './App.vue'
import vuetify from '../plugins/vuetify';
import VueAnime from 'vue-animejs';
import VueAnimeOnItst from '../plugins/animeOnIntersted'
 
Vue.use(VueAnime)
Vue.use(VueAnimeOnItst)

new Vue({
    vuetify,
    render: h => h(App)
}).$mount('#App')