// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Web3 from 'web3'

const web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/8kkr6X3gKuB8cURFQsfa'))

Vue.prototype.web3 = web3
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})