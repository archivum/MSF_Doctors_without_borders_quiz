// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './css/fonts.css'
import './css/normalize.css'
import './css/skeleton.css'

// Plugins
import VModal from 'vue-js-modal'

Vue.use(VModal)

Vue.config.productionTip = false

// if(window.location.pathname === '/' || window.location.pathname === '/profile') {
//     $('#loader').show()
//     window.onload = function() { $('#loader').fadeOut("slow") }
// }
// else {
//     $('#loader').hide()
// }

$(document).ready(function() { window.location.pathname === '/' || window.location.pathname === '/profile' ? $('#loader').fadeOut("slow") : $('#loader').hide() })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})