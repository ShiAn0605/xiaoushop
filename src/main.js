// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './utils/fontSize'
import '../node_modules/swiper/css/swiper.css'
import './style/iconfont/iconfont.css'
import './style/base.styl'
import http from './http/index'
Vue.config.productionTip = false
Vue.prototype.$http = http
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
