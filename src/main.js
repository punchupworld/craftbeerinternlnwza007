import Vue from 'vue'
import App from './App.vue'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import '@wevisdemo/ui/styles/index.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import VAnimateCss from 'v-animate-css';
import * as VueAos from 'vue-aos'
import 'animate.css'

import store from './store'

// analytic
import { VuePlausible } from 'vue-plausible'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.use(VAnimateCss);
Vue.use(VueAos)

Vue.config.productionTip = false

// analytic
Vue.use(VuePlausible, {
  domain: 'project.punchup.world/thaicraftbeer',
  apiHost: 'https://analytics.punchup.world'
})
//

import Plausible from 'plausible-tracker'

const { enableAutoPageviews } = Plausible()

// This tracks the current page view and all future ones as well
enableAutoPageviews()

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
