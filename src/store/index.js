import Vuex from 'vuex';
import Vue from 'vue';
import index from './modules/index'

// Load Vuex
Vue.use(Vuex)

// Create a store
export default new Vuex.Store({
    modules: {
        index
    }
});