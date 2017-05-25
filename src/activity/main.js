import Vue from 'vue'
import App from './App.vue'
import MintUi from 'mint-ui'
import router from './router'

import 'mint-ui/lib/style.css'

Vue.use(MintUi)

new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  render (h) {
    return h('App')
  }
})
