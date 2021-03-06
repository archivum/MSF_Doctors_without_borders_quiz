// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './css/fonts.css'
import './css/normalize.css'
import './css/skeleton.css'

Vue.config.productionTip = false

$(document).ready(
	function() {
		$('#loader').fadeOut("slow")
	}
)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})