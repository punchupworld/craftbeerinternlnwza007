import Vue from 'vue'
import Vuex from 'vuex'
 
Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        count: false
    },
    mutations:{
        showResult(state,isShow) {
            state.count = isShow
        }
    },
})