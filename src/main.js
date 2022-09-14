import Vue from 'vue'
import App from './App.vue'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import VAnimateCss from 'v-animate-css';
import * as VueAos from 'vue-aos'
import 'animate.css'

import store from './store'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.use(VAnimateCss);
Vue.use(VueAos)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
