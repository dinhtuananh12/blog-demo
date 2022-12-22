import Vue from 'vue'
import Vuex from 'vuex'
import blog from './modules/blog'
Vue.use(Vuex)

const storeData = {
    modules: {
        blog
    },
}

const store = new Vuex.Store(storeData)

export default store