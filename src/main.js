// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
window.luminateExtend = require('@/lib/luminateExtend.min.js')
import Vue from 'vue'
import App from './App'
import router from './router'
import './css/fonts.css'
import './css/normalize.css'
import './css/skeleton.css'
require('es6-object-assign').polyfill();

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

window.location.pathname === '/' || window.location.pathname === '/profile' ?
setTimeout(function() {
    $('#loader').fadeOut("slow")
}, 3000) :
$('#loader').hide()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})