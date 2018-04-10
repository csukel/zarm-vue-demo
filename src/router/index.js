import Vue from 'vue'
import Router from 'vue-router'
import CustomersBalanceReport from '@/components/CustomersBalanceReport'
import CustomerPage from "@/components/CustomerPage";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'CustomersBalanceReport',
      component: CustomersBalanceReport
    },
    {
      path:'/customer/:customerId',
      name: 'CustomerPage',
      component: CustomerPage,
      props:true
    }
  ]
})
