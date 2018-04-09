import Vue from 'vue'
import Router from 'vue-router'
import CustomersBalanceReport from '@/components/CustomersBalanceReport'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'CustomersBalanceReport',
      component: CustomersBalanceReport
    }
  ]
})
