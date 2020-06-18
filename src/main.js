import Vue from 'vue'
import App from './App.vue'
import vuetify from '../plugins/vuetify';
import VueAnime from '../plugins/anime';

Vue.use(VueAnime)

new Vue({
    vuetify,
    render: h => h(App)
}).$mount('#App')