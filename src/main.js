
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
import store from '@/store/index'

Vue.use(Vuetify)
import App from './App'
import router from './router'

import '../node_modules/vuetify/dist/vuetify.min.css';
// import '../node_modules/vuetify/src/stylus/app.styl';

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
