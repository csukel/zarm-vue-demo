import Vuex from 'vuex'
import Vue from 'vue'
import filterTabs from './modules/filterTabs'
Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        filterTabs
    }
});