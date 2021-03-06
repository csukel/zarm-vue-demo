import Vuex from 'vuex'
import Vue from 'vue'
import filterTabs from './modules/filterTabs'
import customers from "./modules/customers";
import communicationLog from "./modules/communicationLog";
import invoices from "./modules/invoices";
Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        filterTabs,
        customers,
        communicationLog,
        invoices
    }
});