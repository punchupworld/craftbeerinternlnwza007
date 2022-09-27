import Vue from 'vue'
import Vuex from 'vuex'
 
Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        start: false,
        count: false
    },
    mutations:{
        startResult(state,isStart) {
            state.start = isStart
        },
        showResult(state,isShow) {
            state.count = isShow
        }
    },
})