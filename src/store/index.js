import Vuex from 'vuex'
import Vue from 'vue'
import filterTabs from './modules/filterTabs'
import customers from "./modules/customers";
Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        filterTabs,
        customers
    }
});